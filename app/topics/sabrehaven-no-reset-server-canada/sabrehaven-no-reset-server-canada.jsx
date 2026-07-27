import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-no-reset-server-canada');
}

export default function SabrehavenNoResetServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-no-reset-server-canada" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-no-reset-server-usa');
}

export default function SabrehavenNoResetServerUsaKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-no-reset-server-usa" />;
}

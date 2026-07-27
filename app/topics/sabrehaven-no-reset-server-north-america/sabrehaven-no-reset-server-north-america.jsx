import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-no-reset-server-north-america');
}

export default function SabrehavenNoResetServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-no-reset-server-north-america" />;
}

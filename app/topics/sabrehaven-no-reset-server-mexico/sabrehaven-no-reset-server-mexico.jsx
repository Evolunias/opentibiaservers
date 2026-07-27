import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-no-reset-server-mexico');
}

export default function SabrehavenNoResetServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-no-reset-server-mexico" />;
}

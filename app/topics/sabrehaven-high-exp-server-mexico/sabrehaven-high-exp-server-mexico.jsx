import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-high-exp-server-mexico');
}

export default function SabrehavenHighExpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-high-exp-server-mexico" />;
}

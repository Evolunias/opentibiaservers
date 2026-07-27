import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-low-exp-server-mexico');
}

export default function SabrehavenLowExpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-low-exp-server-mexico" />;
}

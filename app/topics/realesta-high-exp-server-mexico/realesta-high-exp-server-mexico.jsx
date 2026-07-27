import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-high-exp-server-mexico');
}

export default function RealestaHighExpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="realesta-high-exp-server-mexico" />;
}

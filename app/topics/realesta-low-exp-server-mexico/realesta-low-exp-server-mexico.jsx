import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-low-exp-server-mexico');
}

export default function RealestaLowExpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="realesta-low-exp-server-mexico" />;
}

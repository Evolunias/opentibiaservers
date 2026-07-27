import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-high-exp-server-germany');
}

export default function ImperianicHighExpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="imperianic-high-exp-server-germany" />;
}

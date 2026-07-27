import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-low-exp-server-germany');
}

export default function ImperianicLowExpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="imperianic-low-exp-server-germany" />;
}

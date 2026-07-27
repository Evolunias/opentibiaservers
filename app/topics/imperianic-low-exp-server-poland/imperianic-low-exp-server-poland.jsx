import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-low-exp-server-poland');
}

export default function ImperianicLowExpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="imperianic-low-exp-server-poland" />;
}

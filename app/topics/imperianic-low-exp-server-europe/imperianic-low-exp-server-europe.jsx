import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-low-exp-server-europe');
}

export default function ImperianicLowExpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="imperianic-low-exp-server-europe" />;
}

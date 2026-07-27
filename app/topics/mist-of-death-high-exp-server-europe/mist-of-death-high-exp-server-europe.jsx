import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-high-exp-server-europe');
}

export default function MistOfDeathHighExpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-high-exp-server-europe" />;
}

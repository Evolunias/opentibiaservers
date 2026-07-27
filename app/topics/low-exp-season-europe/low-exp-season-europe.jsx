import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-season-europe');
}

export default function LowExpSeasonEuropeKeywordPage() {
  return <StaticKeywordPage slug="low-exp-season-europe" />;
}

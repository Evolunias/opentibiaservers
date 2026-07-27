import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-low-exp-server-europe');
}

export default function KasteriaLowExpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="kasteria-low-exp-server-europe" />;
}

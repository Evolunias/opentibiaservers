import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-low-exp-server-europe');
}

export default function NepreniaLowExpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="neprenia-low-exp-server-europe" />;
}

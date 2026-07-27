import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-retro-server-europe');
}

export default function BlazeraRetroServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="blazera-retro-server-europe" />;
}

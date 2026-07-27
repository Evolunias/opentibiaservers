import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-retro-server-germany');
}

export default function BlazeraRetroServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="blazera-retro-server-germany" />;
}

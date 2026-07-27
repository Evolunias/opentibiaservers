import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-retro-server-poland');
}

export default function BlazeraRetroServerPolandKeywordPage() {
  return <StaticKeywordPage slug="blazera-retro-server-poland" />;
}

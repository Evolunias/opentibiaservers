import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-retro-server-south-america');
}

export default function BlazeraRetroServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="blazera-retro-server-south-america" />;
}

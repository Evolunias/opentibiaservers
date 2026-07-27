import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-retro-server-north-america');
}

export default function BlazeraRetroServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="blazera-retro-server-north-america" />;
}

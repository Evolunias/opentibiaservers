import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-retro-server-canada');
}

export default function BlazeraRetroServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="blazera-retro-server-canada" />;
}

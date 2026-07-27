import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-retro-server-france');
}

export default function BlazeraRetroServerFranceKeywordPage() {
  return <StaticKeywordPage slug="blazera-retro-server-france" />;
}

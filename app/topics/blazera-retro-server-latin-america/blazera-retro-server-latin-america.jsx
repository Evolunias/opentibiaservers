import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-retro-server-latin-america');
}

export default function BlazeraRetroServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="blazera-retro-server-latin-america" />;
}

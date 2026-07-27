import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-retro-server-mexico');
}

export default function BlazeraRetroServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="blazera-retro-server-mexico" />;
}

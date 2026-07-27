import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-retro-server-usa');
}

export default function BlazeraRetroServerUsaKeywordPage() {
  return <StaticKeywordPage slug="blazera-retro-server-usa" />;
}

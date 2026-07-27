import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-retro-server-argentina');
}

export default function BlazeraRetroServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="blazera-retro-server-argentina" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-retro-server-brazil');
}

export default function BlazeraRetroServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="blazera-retro-server-brazil" />;
}

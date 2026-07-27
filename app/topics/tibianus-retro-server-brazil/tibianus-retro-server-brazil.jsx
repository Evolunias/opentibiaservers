import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-retro-server-brazil');
}

export default function TibianusRetroServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibianus-retro-server-brazil" />;
}

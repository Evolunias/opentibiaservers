import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-retro-server-argentina');
}

export default function TibianusRetroServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="tibianus-retro-server-argentina" />;
}

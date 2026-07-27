import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-retro-server-usa');
}

export default function TibianusRetroServerUsaKeywordPage() {
  return <StaticKeywordPage slug="tibianus-retro-server-usa" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-retro-server-mexico');
}

export default function TibianusRetroServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibianus-retro-server-mexico" />;
}

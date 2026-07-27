import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-retro-server-north-america');
}

export default function TibianusRetroServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibianus-retro-server-north-america" />;
}

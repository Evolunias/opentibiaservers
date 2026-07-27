import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-retro-server-canada');
}

export default function TibianusRetroServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibianus-retro-server-canada" />;
}

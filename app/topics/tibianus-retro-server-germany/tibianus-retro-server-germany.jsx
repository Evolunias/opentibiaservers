import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-retro-server-germany');
}

export default function TibianusRetroServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibianus-retro-server-germany" />;
}

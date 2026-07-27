import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-retro-server-europe');
}

export default function TibianusRetroServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="tibianus-retro-server-europe" />;
}

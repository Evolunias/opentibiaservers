import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-retro-server-poland');
}

export default function TibianusRetroServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibianus-retro-server-poland" />;
}

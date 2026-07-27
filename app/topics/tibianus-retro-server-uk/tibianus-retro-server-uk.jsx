import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-retro-server-uk');
}

export default function TibianusRetroServerUkKeywordPage() {
  return <StaticKeywordPage slug="tibianus-retro-server-uk" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-retro-server-europe');
}

export default function RealeraRetroServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="realera-retro-server-europe" />;
}

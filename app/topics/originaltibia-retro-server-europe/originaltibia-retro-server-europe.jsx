import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-retro-server-europe');
}

export default function OriginaltibiaRetroServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-retro-server-europe" />;
}

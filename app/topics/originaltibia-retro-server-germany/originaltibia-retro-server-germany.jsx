import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-retro-server-germany');
}

export default function OriginaltibiaRetroServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-retro-server-germany" />;
}

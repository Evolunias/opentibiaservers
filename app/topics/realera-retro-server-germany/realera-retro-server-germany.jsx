import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-retro-server-germany');
}

export default function RealeraRetroServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="realera-retro-server-germany" />;
}

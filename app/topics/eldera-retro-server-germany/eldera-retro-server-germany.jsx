import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-retro-server-germany');
}

export default function ElderaRetroServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="eldera-retro-server-germany" />;
}

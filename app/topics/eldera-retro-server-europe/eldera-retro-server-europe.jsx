import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-retro-server-europe');
}

export default function ElderaRetroServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="eldera-retro-server-europe" />;
}

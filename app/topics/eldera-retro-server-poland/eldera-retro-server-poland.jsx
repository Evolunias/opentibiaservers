import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-retro-server-poland');
}

export default function ElderaRetroServerPolandKeywordPage() {
  return <StaticKeywordPage slug="eldera-retro-server-poland" />;
}

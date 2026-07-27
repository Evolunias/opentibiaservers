import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-retro-server-uk');
}

export default function ElderaRetroServerUkKeywordPage() {
  return <StaticKeywordPage slug="eldera-retro-server-uk" />;
}

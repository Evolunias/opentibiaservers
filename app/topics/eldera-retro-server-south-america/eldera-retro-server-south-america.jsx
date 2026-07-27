import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-retro-server-south-america');
}

export default function ElderaRetroServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="eldera-retro-server-south-america" />;
}

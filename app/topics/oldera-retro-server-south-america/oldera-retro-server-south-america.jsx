import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-retro-server-south-america');
}

export default function OlderaRetroServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="oldera-retro-server-south-america" />;
}

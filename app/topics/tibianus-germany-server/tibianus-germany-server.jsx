import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-germany-server');
}

export default function TibianusGermanyServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-germany-server" />;
}

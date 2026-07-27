import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-germany-server');
}

export default function UnlineGermanyServerKeywordPage() {
  return <StaticKeywordPage slug="unline-germany-server" />;
}

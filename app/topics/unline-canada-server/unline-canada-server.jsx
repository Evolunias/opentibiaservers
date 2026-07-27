import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-canada-server');
}

export default function UnlineCanadaServerKeywordPage() {
  return <StaticKeywordPage slug="unline-canada-server" />;
}

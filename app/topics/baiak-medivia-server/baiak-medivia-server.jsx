import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-medivia-server');
}

export default function BaiakMediviaServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-medivia-server" />;
}

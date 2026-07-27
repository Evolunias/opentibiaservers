import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ranger-s-arcani-server');
}

export default function BaiakRangerSArcaniServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-ranger-s-arcani-server" />;
}

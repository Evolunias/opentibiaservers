import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-sweden-server');
}

export default function MiracleSwedenServerKeywordPage() {
  return <StaticKeywordPage slug="miracle-sweden-server" />;
}

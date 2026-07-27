import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-15-baiak-server');
}

export default function Trashformers15BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="trashformers-15-baiak-server" />;
}

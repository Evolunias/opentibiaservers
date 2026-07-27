import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-12-baiak-server');
}

export default function Trashformers12BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="trashformers-12-baiak-server" />;
}

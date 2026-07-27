import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-14-baiak-server');
}

export default function Trashformers14BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="trashformers-14-baiak-server" />;
}

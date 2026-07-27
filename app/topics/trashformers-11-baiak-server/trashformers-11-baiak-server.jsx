import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-11-baiak-server');
}

export default function Trashformers11BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="trashformers-11-baiak-server" />;
}

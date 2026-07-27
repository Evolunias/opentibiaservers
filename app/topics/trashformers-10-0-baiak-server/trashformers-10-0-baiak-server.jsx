import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-10-0-baiak-server');
}

export default function Trashformers100BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="trashformers-10-0-baiak-server" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-13-baiak-server');
}

export default function Trashformers13BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="trashformers-13-baiak-server" />;
}

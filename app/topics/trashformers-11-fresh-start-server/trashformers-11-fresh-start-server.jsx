import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-11-fresh-start-server');
}

export default function Trashformers11FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="trashformers-11-fresh-start-server" />;
}

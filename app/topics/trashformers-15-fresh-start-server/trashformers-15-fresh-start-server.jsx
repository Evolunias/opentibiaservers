import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-15-fresh-start-server');
}

export default function Trashformers15FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="trashformers-15-fresh-start-server" />;
}

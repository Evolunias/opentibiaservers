import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-12-fresh-start-server');
}

export default function Trashformers12FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="trashformers-12-fresh-start-server" />;
}

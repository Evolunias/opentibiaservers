import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-8-0-low-exp-server');
}

export default function Trashformers80LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="trashformers-8-0-low-exp-server" />;
}

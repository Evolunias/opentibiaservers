import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-13-low-exp-server');
}

export default function Trashformers13LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="trashformers-13-low-exp-server" />;
}

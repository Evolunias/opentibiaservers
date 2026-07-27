import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-10-0-low-exp-server');
}

export default function Trashformers100LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="trashformers-10-0-low-exp-server" />;
}

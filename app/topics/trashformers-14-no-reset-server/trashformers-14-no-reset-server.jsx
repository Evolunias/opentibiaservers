import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-14-no-reset-server');
}

export default function Trashformers14NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="trashformers-14-no-reset-server" />;
}

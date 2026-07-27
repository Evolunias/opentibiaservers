import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-7-1-no-reset-server');
}

export default function Trashformers71NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="trashformers-7-1-no-reset-server" />;
}

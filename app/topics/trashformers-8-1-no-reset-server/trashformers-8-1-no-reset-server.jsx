import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-8-1-no-reset-server');
}

export default function Trashformers81NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="trashformers-8-1-no-reset-server" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-10-0-no-reset-server');
}

export default function Trashformers100NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="trashformers-10-0-no-reset-server" />;
}

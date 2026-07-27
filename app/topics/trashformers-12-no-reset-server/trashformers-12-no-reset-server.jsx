import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-12-no-reset-server');
}

export default function Trashformers12NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="trashformers-12-no-reset-server" />;
}

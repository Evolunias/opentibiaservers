import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-11-no-reset-server');
}

export default function Trashformers11NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="trashformers-11-no-reset-server" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-15-no-reset-server');
}

export default function Trashformers15NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="trashformers-15-no-reset-server" />;
}

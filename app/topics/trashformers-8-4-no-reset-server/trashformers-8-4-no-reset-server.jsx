import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-8-4-no-reset-server');
}

export default function Trashformers84NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="trashformers-8-4-no-reset-server" />;
}

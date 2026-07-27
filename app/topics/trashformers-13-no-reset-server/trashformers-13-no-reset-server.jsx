import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-13-no-reset-server');
}

export default function Trashformers13NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="trashformers-13-no-reset-server" />;
}

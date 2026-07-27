import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-8-0-no-reset-server');
}

export default function Trashformers80NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="trashformers-8-0-no-reset-server" />;
}

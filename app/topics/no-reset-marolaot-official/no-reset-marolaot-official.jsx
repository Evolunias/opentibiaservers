import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-marolaot-official');
}

export default function NoResetMarolaotOfficialKeywordPage() {
  return <StaticKeywordPage slug="no-reset-marolaot-official" />;
}

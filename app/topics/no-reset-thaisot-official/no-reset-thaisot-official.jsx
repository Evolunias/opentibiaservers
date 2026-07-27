import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-thaisot-official');
}

export default function NoResetThaisotOfficialKeywordPage() {
  return <StaticKeywordPage slug="no-reset-thaisot-official" />;
}

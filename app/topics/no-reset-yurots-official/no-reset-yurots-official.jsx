import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-yurots-official');
}

export default function NoResetYurotsOfficialKeywordPage() {
  return <StaticKeywordPage slug="no-reset-yurots-official" />;
}

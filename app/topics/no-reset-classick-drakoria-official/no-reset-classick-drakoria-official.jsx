import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-classick-drakoria-official');
}

export default function NoResetClassickDrakoriaOfficialKeywordPage() {
  return <StaticKeywordPage slug="no-reset-classick-drakoria-official" />;
}

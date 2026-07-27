import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-coxaot-official');
}

export default function NoResetCoxaotOfficialKeywordPage() {
  return <StaticKeywordPage slug="no-reset-coxaot-official" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-evolera-official');
}

export default function NoResetEvoleraOfficialKeywordPage() {
  return <StaticKeywordPage slug="no-reset-evolera-official" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-blazera-official');
}

export default function NoResetBlazeraOfficialKeywordPage() {
  return <StaticKeywordPage slug="no-reset-blazera-official" />;
}

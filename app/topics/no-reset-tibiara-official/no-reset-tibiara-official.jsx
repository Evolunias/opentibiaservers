import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibiara-official');
}

export default function NoResetTibiaraOfficialKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibiara-official" />;
}

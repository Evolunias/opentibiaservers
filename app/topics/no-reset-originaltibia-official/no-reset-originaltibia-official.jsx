import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-originaltibia-official');
}

export default function NoResetOriginaltibiaOfficialKeywordPage() {
  return <StaticKeywordPage slug="no-reset-originaltibia-official" />;
}

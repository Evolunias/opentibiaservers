import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-archlight-official');
}

export default function NoResetArchlightOfficialKeywordPage() {
  return <StaticKeywordPage slug="no-reset-archlight-official" />;
}

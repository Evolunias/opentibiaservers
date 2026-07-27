import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-archlight-discord');
}

export default function OldSchoolArchlightDiscordKeywordPage() {
  return <StaticKeywordPage slug="old-school-archlight-discord" />;
}

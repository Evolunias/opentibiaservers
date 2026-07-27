import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-rubinot-discord');
}

export default function OldSchoolRubinotDiscordKeywordPage() {
  return <StaticKeywordPage slug="old-school-rubinot-discord" />;
}

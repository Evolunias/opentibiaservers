import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-cyntara-discord');
}

export default function OldSchoolCyntaraDiscordKeywordPage() {
  return <StaticKeywordPage slug="old-school-cyntara-discord" />;
}

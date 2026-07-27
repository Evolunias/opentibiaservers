import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-realera-discord');
}

export default function OldSchoolRealeraDiscordKeywordPage() {
  return <StaticKeywordPage slug="old-school-realera-discord" />;
}

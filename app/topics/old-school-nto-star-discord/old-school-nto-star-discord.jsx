import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-nto-star-discord');
}

export default function OldSchoolNtoStarDiscordKeywordPage() {
  return <StaticKeywordPage slug="old-school-nto-star-discord" />;
}

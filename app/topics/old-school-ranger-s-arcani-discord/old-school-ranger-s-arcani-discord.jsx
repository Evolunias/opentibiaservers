import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-ranger-s-arcani-discord');
}

export default function OldSchoolRangerSArcaniDiscordKeywordPage() {
  return <StaticKeywordPage slug="old-school-ranger-s-arcani-discord" />;
}

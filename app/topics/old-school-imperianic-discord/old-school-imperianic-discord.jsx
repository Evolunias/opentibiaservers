import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-imperianic-discord');
}

export default function OldSchoolImperianicDiscordKeywordPage() {
  return <StaticKeywordPage slug="old-school-imperianic-discord" />;
}

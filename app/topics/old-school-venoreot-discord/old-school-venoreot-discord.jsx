import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-venoreot-discord');
}

export default function OldSchoolVenoreotDiscordKeywordPage() {
  return <StaticKeywordPage slug="old-school-venoreot-discord" />;
}

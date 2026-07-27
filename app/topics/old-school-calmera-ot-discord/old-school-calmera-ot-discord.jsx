import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-calmera-ot-discord');
}

export default function OldSchoolCalmeraOtDiscordKeywordPage() {
  return <StaticKeywordPage slug="old-school-calmera-ot-discord" />;
}

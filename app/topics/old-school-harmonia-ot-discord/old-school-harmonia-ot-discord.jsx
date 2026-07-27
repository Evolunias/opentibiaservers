import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-harmonia-ot-discord');
}

export default function OldSchoolHarmoniaOtDiscordKeywordPage() {
  return <StaticKeywordPage slug="old-school-harmonia-ot-discord" />;
}

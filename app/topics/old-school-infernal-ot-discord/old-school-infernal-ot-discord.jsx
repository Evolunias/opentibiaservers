import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-infernal-ot-discord');
}

export default function OldSchoolInfernalOtDiscordKeywordPage() {
  return <StaticKeywordPage slug="old-school-infernal-ot-discord" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-aurera-global-discord');
}

export default function OldSchoolAureraGlobalDiscordKeywordPage() {
  return <StaticKeywordPage slug="old-school-aurera-global-discord" />;
}

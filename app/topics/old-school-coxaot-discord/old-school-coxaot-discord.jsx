import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-coxaot-discord');
}

export default function OldSchoolCoxaotDiscordKeywordPage() {
  return <StaticKeywordPage slug="old-school-coxaot-discord" />;
}

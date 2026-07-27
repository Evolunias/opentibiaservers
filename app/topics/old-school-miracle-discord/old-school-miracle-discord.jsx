import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-miracle-discord');
}

export default function OldSchoolMiracleDiscordKeywordPage() {
  return <StaticKeywordPage slug="old-school-miracle-discord" />;
}

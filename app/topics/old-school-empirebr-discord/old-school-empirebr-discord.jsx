import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-empirebr-discord');
}

export default function OldSchoolEmpirebrDiscordKeywordPage() {
  return <StaticKeywordPage slug="old-school-empirebr-discord" />;
}

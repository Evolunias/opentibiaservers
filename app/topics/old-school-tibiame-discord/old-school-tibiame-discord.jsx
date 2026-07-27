import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibiame-discord');
}

export default function OldSchoolTibiameDiscordKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibiame-discord" />;
}

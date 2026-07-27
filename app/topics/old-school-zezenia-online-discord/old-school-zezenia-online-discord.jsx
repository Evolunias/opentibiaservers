import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-zezenia-online-discord');
}

export default function OldSchoolZezeniaOnlineDiscordKeywordPage() {
  return <StaticKeywordPage slug="old-school-zezenia-online-discord" />;
}

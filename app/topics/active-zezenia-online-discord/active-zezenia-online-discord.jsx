import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-zezenia-online-discord');
}

export default function ActiveZezeniaOnlineDiscordKeywordPage() {
  return <StaticKeywordPage slug="active-zezenia-online-discord" />;
}

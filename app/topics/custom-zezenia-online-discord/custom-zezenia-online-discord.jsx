import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-zezenia-online-discord');
}

export default function CustomZezeniaOnlineDiscordKeywordPage() {
  return <StaticKeywordPage slug="custom-zezenia-online-discord" />;
}

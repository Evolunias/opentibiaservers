import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-zezenia-online-discord');
}

export default function NewZezeniaOnlineDiscordKeywordPage() {
  return <StaticKeywordPage slug="new-zezenia-online-discord" />;
}

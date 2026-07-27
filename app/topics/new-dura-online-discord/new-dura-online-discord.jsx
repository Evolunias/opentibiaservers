import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-dura-online-discord');
}

export default function NewDuraOnlineDiscordKeywordPage() {
  return <StaticKeywordPage slug="new-dura-online-discord" />;
}

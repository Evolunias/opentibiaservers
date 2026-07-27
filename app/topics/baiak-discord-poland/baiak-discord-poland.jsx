import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-discord-poland');
}

export default function BaiakDiscordPolandKeywordPage() {
  return <StaticKeywordPage slug="baiak-discord-poland" />;
}

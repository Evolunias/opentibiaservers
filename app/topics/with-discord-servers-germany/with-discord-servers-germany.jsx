import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-servers-germany');
}

export default function WithDiscordServersGermanyKeywordPage() {
  return <StaticKeywordPage slug="with-discord-servers-germany" />;
}

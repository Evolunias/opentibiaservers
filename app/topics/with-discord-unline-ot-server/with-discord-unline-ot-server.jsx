import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-unline-ot-server');
}

export default function WithDiscordUnlineOtServerKeywordPage() {
  return <StaticKeywordPage slug="with-discord-unline-ot-server" />;
}

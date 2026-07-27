import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-ot-server-sweden');
}

export default function WithDiscordOtServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="with-discord-ot-server-sweden" />;
}

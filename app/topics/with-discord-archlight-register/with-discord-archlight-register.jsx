import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-archlight-register');
}

export default function WithDiscordArchlightRegisterKeywordPage() {
  return <StaticKeywordPage slug="with-discord-archlight-register" />;
}

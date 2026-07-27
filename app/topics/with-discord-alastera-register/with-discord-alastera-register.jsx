import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-alastera-register');
}

export default function WithDiscordAlasteraRegisterKeywordPage() {
  return <StaticKeywordPage slug="with-discord-alastera-register" />;
}

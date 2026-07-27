import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-ameria-register');
}

export default function WithDiscordAmeriaRegisterKeywordPage() {
  return <StaticKeywordPage slug="with-discord-ameria-register" />;
}

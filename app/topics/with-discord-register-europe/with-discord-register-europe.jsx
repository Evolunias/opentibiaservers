import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-register-europe');
}

export default function WithDiscordRegisterEuropeKeywordPage() {
  return <StaticKeywordPage slug="with-discord-register-europe" />;
}

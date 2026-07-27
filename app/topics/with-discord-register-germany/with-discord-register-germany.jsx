import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-register-germany');
}

export default function WithDiscordRegisterGermanyKeywordPage() {
  return <StaticKeywordPage slug="with-discord-register-germany" />;
}

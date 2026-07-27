import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-register-poland');
}

export default function WithDiscordRegisterPolandKeywordPage() {
  return <StaticKeywordPage slug="with-discord-register-poland" />;
}

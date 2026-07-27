import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-register-brazil');
}

export default function WithDiscordRegisterBrazilKeywordPage() {
  return <StaticKeywordPage slug="with-discord-register-brazil" />;
}

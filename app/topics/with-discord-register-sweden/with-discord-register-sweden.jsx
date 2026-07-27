import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-register-sweden');
}

export default function WithDiscordRegisterSwedenKeywordPage() {
  return <StaticKeywordPage slug="with-discord-register-sweden" />;
}

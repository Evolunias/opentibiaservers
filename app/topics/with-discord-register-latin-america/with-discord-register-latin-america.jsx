import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-register-latin-america');
}

export default function WithDiscordRegisterLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-register-latin-america" />;
}

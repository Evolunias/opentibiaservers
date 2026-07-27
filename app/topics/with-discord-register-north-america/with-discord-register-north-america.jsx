import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-register-north-america');
}

export default function WithDiscordRegisterNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-register-north-america" />;
}

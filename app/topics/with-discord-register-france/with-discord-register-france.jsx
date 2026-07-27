import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-register-france');
}

export default function WithDiscordRegisterFranceKeywordPage() {
  return <StaticKeywordPage slug="with-discord-register-france" />;
}

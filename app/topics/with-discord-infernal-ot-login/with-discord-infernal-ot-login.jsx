import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-infernal-ot-login');
}

export default function WithDiscordInfernalOtLoginKeywordPage() {
  return <StaticKeywordPage slug="with-discord-infernal-ot-login" />;
}

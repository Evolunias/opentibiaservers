import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-register-canada');
}

export default function WithDiscordRegisterCanadaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-register-canada" />;
}

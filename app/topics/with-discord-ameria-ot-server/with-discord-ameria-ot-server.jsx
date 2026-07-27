import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-ameria-ot-server');
}

export default function WithDiscordAmeriaOtServerKeywordPage() {
  return <StaticKeywordPage slug="with-discord-ameria-ot-server" />;
}

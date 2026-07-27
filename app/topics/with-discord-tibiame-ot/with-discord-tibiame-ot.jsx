import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-tibiame-ot');
}

export default function WithDiscordTibiameOtKeywordPage() {
  return <StaticKeywordPage slug="with-discord-tibiame-ot" />;
}

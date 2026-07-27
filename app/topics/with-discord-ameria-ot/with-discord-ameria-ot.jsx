import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-ameria-ot');
}

export default function WithDiscordAmeriaOtKeywordPage() {
  return <StaticKeywordPage slug="with-discord-ameria-ot" />;
}

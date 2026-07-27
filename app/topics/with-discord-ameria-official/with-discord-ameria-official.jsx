import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-ameria-official');
}

export default function WithDiscordAmeriaOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-discord-ameria-official" />;
}

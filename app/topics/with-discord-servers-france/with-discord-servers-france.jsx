import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-servers-france');
}

export default function WithDiscordServersFranceKeywordPage() {
  return <StaticKeywordPage slug="with-discord-servers-france" />;
}

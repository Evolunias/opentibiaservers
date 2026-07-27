import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-alastera-ot');
}

export default function WithDiscordAlasteraOtKeywordPage() {
  return <StaticKeywordPage slug="with-discord-alastera-ot" />;
}

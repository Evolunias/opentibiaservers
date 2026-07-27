import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-calmera-ot-client');
}

export default function WithDiscordCalmeraOtClientKeywordPage() {
  return <StaticKeywordPage slug="with-discord-calmera-ot-client" />;
}

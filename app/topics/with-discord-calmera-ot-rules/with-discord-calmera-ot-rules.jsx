import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-calmera-ot-rules');
}

export default function WithDiscordCalmeraOtRulesKeywordPage() {
  return <StaticKeywordPage slug="with-discord-calmera-ot-rules" />;
}

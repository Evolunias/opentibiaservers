import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-luminera-ot');
}

export default function WithDiscordLumineraOtKeywordPage() {
  return <StaticKeywordPage slug="with-discord-luminera-ot" />;
}

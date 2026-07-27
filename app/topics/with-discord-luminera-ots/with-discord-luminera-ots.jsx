import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-luminera-ots');
}

export default function WithDiscordLumineraOtsKeywordPage() {
  return <StaticKeywordPage slug="with-discord-luminera-ots" />;
}

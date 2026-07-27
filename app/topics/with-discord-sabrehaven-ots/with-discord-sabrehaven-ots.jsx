import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-sabrehaven-ots');
}

export default function WithDiscordSabrehavenOtsKeywordPage() {
  return <StaticKeywordPage slug="with-discord-sabrehaven-ots" />;
}

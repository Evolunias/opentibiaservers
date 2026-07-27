import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-xanteria-create-account');
}

export default function WithDiscordXanteriaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="with-discord-xanteria-create-account" />;
}

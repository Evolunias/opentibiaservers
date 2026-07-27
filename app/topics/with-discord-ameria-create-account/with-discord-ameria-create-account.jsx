import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-ameria-create-account');
}

export default function WithDiscordAmeriaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="with-discord-ameria-create-account" />;
}

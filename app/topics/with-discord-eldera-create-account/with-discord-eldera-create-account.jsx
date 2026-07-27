import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-eldera-create-account');
}

export default function WithDiscordElderaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="with-discord-eldera-create-account" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-otmadness-create-account');
}

export default function WithDiscordOtmadnessCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="with-discord-otmadness-create-account" />;
}

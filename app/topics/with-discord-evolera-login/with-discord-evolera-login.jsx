import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-evolera-login');
}

export default function WithDiscordEvoleraLoginKeywordPage() {
  return <StaticKeywordPage slug="with-discord-evolera-login" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-blazera-login');
}

export default function WithDiscordBlazeraLoginKeywordPage() {
  return <StaticKeywordPage slug="with-discord-blazera-login" />;
}

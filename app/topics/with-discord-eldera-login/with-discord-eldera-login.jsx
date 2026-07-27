import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-eldera-login');
}

export default function WithDiscordElderaLoginKeywordPage() {
  return <StaticKeywordPage slug="with-discord-eldera-login" />;
}

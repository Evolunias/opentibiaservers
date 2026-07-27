import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-luminera-login');
}

export default function WithDiscordLumineraLoginKeywordPage() {
  return <StaticKeywordPage slug="with-discord-luminera-login" />;
}

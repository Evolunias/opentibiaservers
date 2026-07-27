import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-saintsot-login');
}

export default function WithDiscordSaintsotLoginKeywordPage() {
  return <StaticKeywordPage slug="with-discord-saintsot-login" />;
}

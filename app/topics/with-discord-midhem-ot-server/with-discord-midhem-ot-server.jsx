import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-midhem-ot-server');
}

export default function WithDiscordMidhemOtServerKeywordPage() {
  return <StaticKeywordPage slug="with-discord-midhem-ot-server" />;
}

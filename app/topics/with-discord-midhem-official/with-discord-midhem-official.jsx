import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-midhem-official');
}

export default function WithDiscordMidhemOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-discord-midhem-official" />;
}

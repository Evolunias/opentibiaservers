import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-midhem-ots');
}

export default function WithDiscordMidhemOtsKeywordPage() {
  return <StaticKeywordPage slug="with-discord-midhem-ots" />;
}

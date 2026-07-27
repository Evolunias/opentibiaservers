import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-midhem-ot');
}

export default function WithDiscordMidhemOtKeywordPage() {
  return <StaticKeywordPage slug="with-discord-midhem-ot" />;
}

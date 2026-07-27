import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-ranger-s-arcani-discord');
}

export default function FreshStartRangerSArcaniDiscordKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-ranger-s-arcani-discord" />;
}

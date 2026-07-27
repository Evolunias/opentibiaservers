import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-ranger-s-arcani-discord');
}

export default function PopularRangerSArcaniDiscordKeywordPage() {
  return <StaticKeywordPage slug="popular-ranger-s-arcani-discord" />;
}

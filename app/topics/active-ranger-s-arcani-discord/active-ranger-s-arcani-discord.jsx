import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-ranger-s-arcani-discord');
}

export default function ActiveRangerSArcaniDiscordKeywordPage() {
  return <StaticKeywordPage slug="active-ranger-s-arcani-discord" />;
}

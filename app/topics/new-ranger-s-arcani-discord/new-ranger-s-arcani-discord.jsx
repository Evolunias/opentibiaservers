import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-ranger-s-arcani-discord');
}

export default function NewRangerSArcaniDiscordKeywordPage() {
  return <StaticKeywordPage slug="new-ranger-s-arcani-discord" />;
}

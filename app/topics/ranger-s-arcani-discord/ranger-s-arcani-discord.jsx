import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-discord');
}

export default function RangerSArcaniDiscordKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-discord" />;
}

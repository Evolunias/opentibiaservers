import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-15-with-discord-server');
}

export default function RangerSArcani15WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-15-with-discord-server" />;
}

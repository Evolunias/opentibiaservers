import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-12-with-discord-server');
}

export default function RangerSArcani12WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-12-with-discord-server" />;
}

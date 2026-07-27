import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-discord');
}

export default function ClassicusDiscordKeywordPage() {
  return <StaticKeywordPage slug="classicus-discord" />;
}

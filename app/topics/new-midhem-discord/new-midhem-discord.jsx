import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-midhem-discord');
}

export default function NewMidhemDiscordKeywordPage() {
  return <StaticKeywordPage slug="new-midhem-discord" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-midhem-discord');
}

export default function CustomMidhemDiscordKeywordPage() {
  return <StaticKeywordPage slug="custom-midhem-discord" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-midhem-discord');
}

export default function ActiveMidhemDiscordKeywordPage() {
  return <StaticKeywordPage slug="active-midhem-discord" />;
}

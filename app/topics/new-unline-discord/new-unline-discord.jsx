import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-unline-discord');
}

export default function NewUnlineDiscordKeywordPage() {
  return <StaticKeywordPage slug="new-unline-discord" />;
}

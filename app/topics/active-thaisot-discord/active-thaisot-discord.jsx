import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-thaisot-discord');
}

export default function ActiveThaisotDiscordKeywordPage() {
  return <StaticKeywordPage slug="active-thaisot-discord" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-thaisot-discord');
}

export default function CustomThaisotDiscordKeywordPage() {
  return <StaticKeywordPage slug="custom-thaisot-discord" />;
}

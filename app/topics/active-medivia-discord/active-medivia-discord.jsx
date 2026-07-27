import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-medivia-discord');
}

export default function ActiveMediviaDiscordKeywordPage() {
  return <StaticKeywordPage slug="active-medivia-discord" />;
}

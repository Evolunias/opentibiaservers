import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-medivia-discord');
}

export default function CustomMediviaDiscordKeywordPage() {
  return <StaticKeywordPage slug="custom-medivia-discord" />;
}

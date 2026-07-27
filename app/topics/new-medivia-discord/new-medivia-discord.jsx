import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-medivia-discord');
}

export default function NewMediviaDiscordKeywordPage() {
  return <StaticKeywordPage slug="new-medivia-discord" />;
}

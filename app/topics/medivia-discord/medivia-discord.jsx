import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-discord');
}

export default function MediviaDiscordKeywordPage() {
  return <StaticKeywordPage slug="medivia-discord" />;
}

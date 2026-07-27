import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-infernal-ot-discord');
}

export default function NewInfernalOtDiscordKeywordPage() {
  return <StaticKeywordPage slug="new-infernal-ot-discord" />;
}

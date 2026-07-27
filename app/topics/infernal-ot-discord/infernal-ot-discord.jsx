import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-discord');
}

export default function InfernalOtDiscordKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-discord" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-infernal-ot-discord');
}

export default function CustomInfernalOtDiscordKeywordPage() {
  return <StaticKeywordPage slug="custom-infernal-ot-discord" />;
}

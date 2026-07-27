import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-evolunia-online');
}

export default function HighrateEvoluniaOnlineKeywordPage() {
  return <StaticKeywordPage slug="highrate-evolunia-online" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-evolunia-online');
}

export default function LowrateEvoluniaOnlineKeywordPage() {
  return <StaticKeywordPage slug="lowrate-evolunia-online" />;
}

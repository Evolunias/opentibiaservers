import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-evolunia-online');
}

export default function CurrentEvoluniaOnlineKeywordPage() {
  return <StaticKeywordPage slug="current-evolunia-online" />;
}

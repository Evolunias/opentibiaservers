import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-online');
}

export default function EvoluniaOnlineKeywordPage() {
  return <StaticKeywordPage slug="evolunia-online" />;
}

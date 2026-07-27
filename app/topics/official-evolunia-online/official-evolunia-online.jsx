import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-evolunia-online');
}

export default function OfficialEvoluniaOnlineKeywordPage() {
  return <StaticKeywordPage slug="official-evolunia-online" />;
}

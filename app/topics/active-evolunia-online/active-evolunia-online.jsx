import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-evolunia-online');
}

export default function ActiveEvoluniaOnlineKeywordPage() {
  return <StaticKeywordPage slug="active-evolunia-online" />;
}

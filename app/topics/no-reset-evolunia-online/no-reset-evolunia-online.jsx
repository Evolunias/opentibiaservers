import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-evolunia-online');
}

export default function NoResetEvoluniaOnlineKeywordPage() {
  return <StaticKeywordPage slug="no-reset-evolunia-online" />;
}

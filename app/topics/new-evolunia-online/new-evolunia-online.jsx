import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-evolunia-online');
}

export default function NewEvoluniaOnlineKeywordPage() {
  return <StaticKeywordPage slug="new-evolunia-online" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibiantis-online');
}

export default function NewTibiantisOnlineKeywordPage() {
  return <StaticKeywordPage slug="new-tibiantis-online" />;
}

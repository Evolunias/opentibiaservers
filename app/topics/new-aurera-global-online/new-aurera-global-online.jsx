import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-aurera-global-online');
}

export default function NewAureraGlobalOnlineKeywordPage() {
  return <StaticKeywordPage slug="new-aurera-global-online" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-shadowcores-online');
}

export default function NewShadowcoresOnlineKeywordPage() {
  return <StaticKeywordPage slug="new-shadowcores-online" />;
}

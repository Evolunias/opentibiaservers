import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-online');
}

export default function ShadowcoresOnlineKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-online" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('guardia-online');
}

export default function GuardiaOnlineKeywordPage() {
  return <StaticKeywordPage slug="guardia-online" />;
}

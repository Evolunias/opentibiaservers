import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-unline-online');
}

export default function CustomUnlineOnlineKeywordPage() {
  return <StaticKeywordPage slug="custom-unline-online" />;
}

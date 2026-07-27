import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-classicus-online');
}

export default function CustomClassicusOnlineKeywordPage() {
  return <StaticKeywordPage slug="custom-classicus-online" />;
}

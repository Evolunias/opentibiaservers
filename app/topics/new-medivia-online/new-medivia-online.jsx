import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-medivia-online');
}

export default function NewMediviaOnlineKeywordPage() {
  return <StaticKeywordPage slug="new-medivia-online" />;
}

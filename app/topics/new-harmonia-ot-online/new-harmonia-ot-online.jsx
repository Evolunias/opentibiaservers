import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-harmonia-ot-online');
}

export default function NewHarmoniaOtOnlineKeywordPage() {
  return <StaticKeywordPage slug="new-harmonia-ot-online" />;
}

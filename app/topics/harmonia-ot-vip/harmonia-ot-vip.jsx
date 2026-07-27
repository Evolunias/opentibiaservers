import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-vip');
}

export default function HarmoniaOtVipKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-vip" />;
}

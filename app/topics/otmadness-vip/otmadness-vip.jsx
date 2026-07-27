import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-vip');
}

export default function OtmadnessVipKeywordPage() {
  return <StaticKeywordPage slug="otmadness-vip" />;
}

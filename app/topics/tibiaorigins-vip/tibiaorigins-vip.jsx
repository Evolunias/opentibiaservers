import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-vip');
}

export default function TibiaoriginsVipKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-vip" />;
}

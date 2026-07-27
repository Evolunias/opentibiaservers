import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-vip');
}

export default function DemolidoresVipKeywordPage() {
  return <StaticKeywordPage slug="demolidores-vip" />;
}

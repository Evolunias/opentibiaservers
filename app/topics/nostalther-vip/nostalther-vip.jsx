import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-vip');
}

export default function NostaltherVipKeywordPage() {
  return <StaticKeywordPage slug="nostalther-vip" />;
}

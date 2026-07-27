import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-vip');
}

export default function MadnessaliveVipKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-vip" />;
}

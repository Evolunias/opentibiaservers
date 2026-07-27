import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-vip');
}

export default function NilotVipKeywordPage() {
  return <StaticKeywordPage slug="nilot-vip" />;
}

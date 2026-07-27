import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-vip');
}

export default function MistOfDeathVipKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-vip" />;
}

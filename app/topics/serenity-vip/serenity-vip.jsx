import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-vip');
}

export default function SerenityVipKeywordPage() {
  return <StaticKeywordPage slug="serenity-vip" />;
}

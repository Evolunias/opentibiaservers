import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-vip');
}

export default function SabrehavenVipKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-vip" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-high-exp-server-north-america');
}

export default function OriginaltibiaHighExpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-high-exp-server-north-america" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-high-exp-server-usa');
}

export default function OriginaltibiaHighExpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-high-exp-server-usa" />;
}

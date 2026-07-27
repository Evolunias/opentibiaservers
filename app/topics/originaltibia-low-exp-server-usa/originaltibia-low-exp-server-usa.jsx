import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-low-exp-server-usa');
}

export default function OriginaltibiaLowExpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-low-exp-server-usa" />;
}

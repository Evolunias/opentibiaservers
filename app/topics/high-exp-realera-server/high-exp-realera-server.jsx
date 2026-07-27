import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-realera-server');
}

export default function HighExpRealeraServerKeywordPage() {
  return <StaticKeywordPage slug="high-exp-realera-server" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-eldera-server');
}

export default function HighExpElderaServerKeywordPage() {
  return <StaticKeywordPage slug="high-exp-eldera-server" />;
}

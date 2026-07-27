import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-realesta-server');
}

export default function HighExpRealestaServerKeywordPage() {
  return <StaticKeywordPage slug="high-exp-realesta-server" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-server');
}

export default function RealestaServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-server" />;
}

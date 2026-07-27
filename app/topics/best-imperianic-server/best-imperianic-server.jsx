import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-imperianic-server');
}

export default function BestImperianicServerKeywordPage() {
  return <StaticKeywordPage slug="best-imperianic-server" />;
}

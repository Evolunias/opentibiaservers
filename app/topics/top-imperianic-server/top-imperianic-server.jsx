import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-imperianic-server');
}

export default function TopImperianicServerKeywordPage() {
  return <StaticKeywordPage slug="top-imperianic-server" />;
}

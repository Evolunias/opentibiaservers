import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-imperianic-server');
}

export default function CurrentImperianicServerKeywordPage() {
  return <StaticKeywordPage slug="current-imperianic-server" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-fun-server');
}

export default function VenoreotFunServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-fun-server" />;
}

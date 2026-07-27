import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-launcher');
}

export default function VenoreotLauncherKeywordPage() {
  return <StaticKeywordPage slug="venoreot-launcher" />;
}

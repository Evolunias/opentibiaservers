import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-official');
}

export default function VenoreotOfficialKeywordPage() {
  return <StaticKeywordPage slug="venoreot-official" />;
}

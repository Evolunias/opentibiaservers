import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-register');
}

export default function VenoreotRegisterKeywordPage() {
  return <StaticKeywordPage slug="venoreot-register" />;
}

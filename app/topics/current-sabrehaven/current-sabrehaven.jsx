import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-sabrehaven');
}

export default function CurrentSabrehavenKeywordPage() {
  return <StaticKeywordPage slug="current-sabrehaven" />;
}

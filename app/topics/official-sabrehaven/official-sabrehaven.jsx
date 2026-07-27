import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-sabrehaven');
}

export default function OfficialSabrehavenKeywordPage() {
  return <StaticKeywordPage slug="official-sabrehaven" />;
}

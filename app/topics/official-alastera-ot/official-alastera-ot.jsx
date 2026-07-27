import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-alastera-ot');
}

export default function OfficialAlasteraOtKeywordPage() {
  return <StaticKeywordPage slug="official-alastera-ot" />;
}

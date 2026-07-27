import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-thaisot-ot');
}

export default function OfficialThaisotOtKeywordPage() {
  return <StaticKeywordPage slug="official-thaisot-ot" />;
}

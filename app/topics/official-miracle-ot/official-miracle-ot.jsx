import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-miracle-ot');
}

export default function OfficialMiracleOtKeywordPage() {
  return <StaticKeywordPage slug="official-miracle-ot" />;
}

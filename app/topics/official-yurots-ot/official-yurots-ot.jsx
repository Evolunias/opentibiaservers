import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-yurots-ot');
}

export default function OfficialYurotsOtKeywordPage() {
  return <StaticKeywordPage slug="official-yurots-ot" />;
}

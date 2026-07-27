import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-evolera-ot');
}

export default function OfficialEvoleraOtKeywordPage() {
  return <StaticKeywordPage slug="official-evolera-ot" />;
}

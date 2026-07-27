import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-ot');
}

export default function AureraGlobalOtKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-ot" />;
}

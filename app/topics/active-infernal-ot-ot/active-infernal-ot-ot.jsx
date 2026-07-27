import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-infernal-ot-ot');
}

export default function ActiveInfernalOtOtKeywordPage() {
  return <StaticKeywordPage slug="active-infernal-ot-ot" />;
}

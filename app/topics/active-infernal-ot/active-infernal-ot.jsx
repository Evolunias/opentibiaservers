import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-infernal-ot');
}

export default function ActiveInfernalOtKeywordPage() {
  return <StaticKeywordPage slug="active-infernal-ot" />;
}

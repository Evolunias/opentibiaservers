import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-infernal-ot-ot');
}

export default function CustomInfernalOtOtKeywordPage() {
  return <StaticKeywordPage slug="custom-infernal-ot-ot" />;
}

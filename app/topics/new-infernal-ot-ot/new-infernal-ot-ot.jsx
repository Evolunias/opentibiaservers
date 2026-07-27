import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-infernal-ot-ot');
}

export default function NewInfernalOtOtKeywordPage() {
  return <StaticKeywordPage slug="new-infernal-ot-ot" />;
}

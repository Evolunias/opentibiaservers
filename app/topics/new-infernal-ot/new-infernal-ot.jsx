import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-infernal-ot');
}

export default function NewInfernalOtKeywordPage() {
  return <StaticKeywordPage slug="new-infernal-ot" />;
}

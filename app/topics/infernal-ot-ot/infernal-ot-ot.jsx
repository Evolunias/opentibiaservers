import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-ot');
}

export default function InfernalOtOtKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-ot" />;
}

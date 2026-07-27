import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot');
}

export default function InfernalOtKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot" />;
}

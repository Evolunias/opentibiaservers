import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-wars');
}

export default function InfernalOtWarsKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-wars" />;
}

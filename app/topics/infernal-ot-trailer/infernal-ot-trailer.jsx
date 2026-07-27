import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-trailer');
}

export default function InfernalOtTrailerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-trailer" />;
}

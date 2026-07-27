import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-trailer');
}

export default function EmpirebrTrailerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-trailer" />;
}

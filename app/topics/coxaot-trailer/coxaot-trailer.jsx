import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-trailer');
}

export default function CoxaotTrailerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-trailer" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-realesta-ot');
}

export default function LowrateRealestaOtKeywordPage() {
  return <StaticKeywordPage slug="lowrate-realesta-ot" />;
}

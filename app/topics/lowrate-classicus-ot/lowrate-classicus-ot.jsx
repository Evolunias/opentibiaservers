import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-classicus-ot');
}

export default function LowrateClassicusOtKeywordPage() {
  return <StaticKeywordPage slug="lowrate-classicus-ot" />;
}

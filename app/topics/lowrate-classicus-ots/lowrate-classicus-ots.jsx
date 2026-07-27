import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-classicus-ots');
}

export default function LowrateClassicusOtsKeywordPage() {
  return <StaticKeywordPage slug="lowrate-classicus-ots" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-thornia-ots');
}

export default function LowrateThorniaOtsKeywordPage() {
  return <StaticKeywordPage slug="lowrate-thornia-ots" />;
}

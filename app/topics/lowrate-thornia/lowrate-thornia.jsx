import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-thornia');
}

export default function LowrateThorniaKeywordPage() {
  return <StaticKeywordPage slug="lowrate-thornia" />;
}

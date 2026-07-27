import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-alastera');
}

export default function LowrateAlasteraKeywordPage() {
  return <StaticKeywordPage slug="lowrate-alastera" />;
}

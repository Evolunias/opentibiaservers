import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-alastera-login');
}

export default function LowrateAlasteraLoginKeywordPage() {
  return <StaticKeywordPage slug="lowrate-alastera-login" />;
}

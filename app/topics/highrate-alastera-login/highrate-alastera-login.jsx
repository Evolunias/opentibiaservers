import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-alastera-login');
}

export default function HighrateAlasteraLoginKeywordPage() {
  return <StaticKeywordPage slug="highrate-alastera-login" />;
}

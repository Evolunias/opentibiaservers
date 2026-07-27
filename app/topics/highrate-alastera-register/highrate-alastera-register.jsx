import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-alastera-register');
}

export default function HighrateAlasteraRegisterKeywordPage() {
  return <StaticKeywordPage slug="highrate-alastera-register" />;
}

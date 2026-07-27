import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-alastera-register');
}

export default function LowrateAlasteraRegisterKeywordPage() {
  return <StaticKeywordPage slug="lowrate-alastera-register" />;
}

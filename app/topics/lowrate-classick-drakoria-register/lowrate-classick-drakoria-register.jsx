import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-classick-drakoria-register');
}

export default function LowrateClassickDrakoriaRegisterKeywordPage() {
  return <StaticKeywordPage slug="lowrate-classick-drakoria-register" />;
}

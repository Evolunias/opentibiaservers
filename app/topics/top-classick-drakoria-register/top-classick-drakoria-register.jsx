import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-classick-drakoria-register');
}

export default function TopClassickDrakoriaRegisterKeywordPage() {
  return <StaticKeywordPage slug="top-classick-drakoria-register" />;
}

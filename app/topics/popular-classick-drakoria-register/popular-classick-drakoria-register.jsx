import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-classick-drakoria-register');
}

export default function PopularClassickDrakoriaRegisterKeywordPage() {
  return <StaticKeywordPage slug="popular-classick-drakoria-register" />;
}

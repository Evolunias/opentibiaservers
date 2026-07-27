import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-classick-drakoria-register');
}

export default function ActiveClassickDrakoriaRegisterKeywordPage() {
  return <StaticKeywordPage slug="active-classick-drakoria-register" />;
}

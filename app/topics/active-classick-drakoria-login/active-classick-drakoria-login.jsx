import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-classick-drakoria-login');
}

export default function ActiveClassickDrakoriaLoginKeywordPage() {
  return <StaticKeywordPage slug="active-classick-drakoria-login" />;
}

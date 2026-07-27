import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-classick-drakoria-login');
}

export default function CustomClassickDrakoriaLoginKeywordPage() {
  return <StaticKeywordPage slug="custom-classick-drakoria-login" />;
}

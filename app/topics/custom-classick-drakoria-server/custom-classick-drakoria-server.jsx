import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-classick-drakoria-server');
}

export default function CustomClassickDrakoriaServerKeywordPage() {
  return <StaticKeywordPage slug="custom-classick-drakoria-server" />;
}

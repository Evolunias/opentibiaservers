import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-classick-drakoria-server');
}

export default function ActiveClassickDrakoriaServerKeywordPage() {
  return <StaticKeywordPage slug="active-classick-drakoria-server" />;
}

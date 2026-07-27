import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-classick-drakoria-server');
}

export default function NewClassickDrakoriaServerKeywordPage() {
  return <StaticKeywordPage slug="new-classick-drakoria-server" />;
}

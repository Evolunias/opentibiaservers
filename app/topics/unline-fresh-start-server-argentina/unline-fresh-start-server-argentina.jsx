import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-fresh-start-server-argentina');
}

export default function UnlineFreshStartServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="unline-fresh-start-server-argentina" />;
}

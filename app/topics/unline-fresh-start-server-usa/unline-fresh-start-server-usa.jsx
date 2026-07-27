import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-fresh-start-server-usa');
}

export default function UnlineFreshStartServerUsaKeywordPage() {
  return <StaticKeywordPage slug="unline-fresh-start-server-usa" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-fresh-start-server-north-america');
}

export default function UnlineFreshStartServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="unline-fresh-start-server-north-america" />;
}

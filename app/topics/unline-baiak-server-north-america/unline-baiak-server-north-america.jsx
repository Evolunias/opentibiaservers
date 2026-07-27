import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-baiak-server-north-america');
}

export default function UnlineBaiakServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="unline-baiak-server-north-america" />;
}

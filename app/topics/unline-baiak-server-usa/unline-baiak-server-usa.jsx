import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-baiak-server-usa');
}

export default function UnlineBaiakServerUsaKeywordPage() {
  return <StaticKeywordPage slug="unline-baiak-server-usa" />;
}

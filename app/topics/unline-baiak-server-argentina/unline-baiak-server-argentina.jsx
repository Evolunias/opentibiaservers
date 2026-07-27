import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-baiak-server-argentina');
}

export default function UnlineBaiakServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="unline-baiak-server-argentina" />;
}

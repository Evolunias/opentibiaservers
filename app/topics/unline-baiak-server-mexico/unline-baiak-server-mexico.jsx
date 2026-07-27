import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-baiak-server-mexico');
}

export default function UnlineBaiakServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="unline-baiak-server-mexico" />;
}

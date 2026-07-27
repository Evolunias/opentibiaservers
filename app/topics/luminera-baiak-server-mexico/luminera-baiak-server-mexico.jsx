import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-baiak-server-mexico');
}

export default function LumineraBaiakServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="luminera-baiak-server-mexico" />;
}

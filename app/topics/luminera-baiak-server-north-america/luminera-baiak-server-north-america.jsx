import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-baiak-server-north-america');
}

export default function LumineraBaiakServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="luminera-baiak-server-north-america" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-7-4-baiak-server');
}

export default function Luminera74BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-7-4-baiak-server" />;
}

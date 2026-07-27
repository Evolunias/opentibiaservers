import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-7-6-baiak-server');
}

export default function Luminera76BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-7-6-baiak-server" />;
}

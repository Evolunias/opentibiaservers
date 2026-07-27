import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-11-baiak-server');
}

export default function Luminera11BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-11-baiak-server" />;
}

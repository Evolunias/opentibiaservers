import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-7-72-baiak-server');
}

export default function Luminera772BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-7-72-baiak-server" />;
}

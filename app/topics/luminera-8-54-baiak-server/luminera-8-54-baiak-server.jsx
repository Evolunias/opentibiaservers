import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-8-54-baiak-server');
}

export default function Luminera854BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-8-54-baiak-server" />;
}

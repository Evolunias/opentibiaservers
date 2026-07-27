import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-10-98-baiak-server');
}

export default function Luminera1098BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-10-98-baiak-server" />;
}

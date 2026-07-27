import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-12-baiak-server');
}

export default function Luminera12BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-12-baiak-server" />;
}

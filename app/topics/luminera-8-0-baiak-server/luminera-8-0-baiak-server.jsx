import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-8-0-baiak-server');
}

export default function Luminera80BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-8-0-baiak-server" />;
}

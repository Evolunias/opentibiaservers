import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-8-1-baiak-server');
}

export default function Luminera81BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-8-1-baiak-server" />;
}

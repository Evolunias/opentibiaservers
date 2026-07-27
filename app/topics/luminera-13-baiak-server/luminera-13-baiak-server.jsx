import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-13-baiak-server');
}

export default function Luminera13BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-13-baiak-server" />;
}

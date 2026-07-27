import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-14-baiak-server');
}

export default function Luminera14BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-14-baiak-server" />;
}

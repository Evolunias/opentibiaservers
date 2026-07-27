import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-10-0-baiak-server');
}

export default function Shadowcores100BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-10-0-baiak-server" />;
}

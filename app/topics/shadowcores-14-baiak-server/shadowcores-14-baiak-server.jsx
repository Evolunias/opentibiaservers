import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-14-baiak-server');
}

export default function Shadowcores14BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-14-baiak-server" />;
}

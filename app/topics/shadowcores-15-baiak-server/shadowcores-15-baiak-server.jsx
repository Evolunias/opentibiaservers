import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-15-baiak-server');
}

export default function Shadowcores15BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-15-baiak-server" />;
}

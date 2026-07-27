import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-8-0-baiak-server');
}

export default function Unline80BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="unline-8-0-baiak-server" />;
}

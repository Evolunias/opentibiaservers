import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-14-baiak-server');
}

export default function Sabrehaven14BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-14-baiak-server" />;
}

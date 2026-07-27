import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-baiak-server-germany');
}

export default function SabrehavenBaiakServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-baiak-server-germany" />;
}

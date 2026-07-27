import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-baiak-server-brazil');
}

export default function SabrehavenBaiakServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-baiak-server-brazil" />;
}

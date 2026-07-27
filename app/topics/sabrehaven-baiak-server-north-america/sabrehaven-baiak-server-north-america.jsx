import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-baiak-server-north-america');
}

export default function SabrehavenBaiakServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-baiak-server-north-america" />;
}

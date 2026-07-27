import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-baiak-server-south-america');
}

export default function SabrehavenBaiakServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-baiak-server-south-america" />;
}

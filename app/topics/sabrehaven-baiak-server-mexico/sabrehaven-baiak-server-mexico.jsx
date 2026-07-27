import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-baiak-server-mexico');
}

export default function SabrehavenBaiakServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-baiak-server-mexico" />;
}

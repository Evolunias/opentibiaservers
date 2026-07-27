import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-baiak-server-latin-america');
}

export default function SabrehavenBaiakServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-baiak-server-latin-america" />;
}

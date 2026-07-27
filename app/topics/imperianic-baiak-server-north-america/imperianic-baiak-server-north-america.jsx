import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-baiak-server-north-america');
}

export default function ImperianicBaiakServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="imperianic-baiak-server-north-america" />;
}

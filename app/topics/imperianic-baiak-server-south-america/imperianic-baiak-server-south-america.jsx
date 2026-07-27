import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-baiak-server-south-america');
}

export default function ImperianicBaiakServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="imperianic-baiak-server-south-america" />;
}

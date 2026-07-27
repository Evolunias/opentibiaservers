import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('amera-server');
}

export default function AmeraServerKeywordPage() {
  return <StaticKeywordPage slug="amera-server" />;
}

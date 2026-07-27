import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-realera-server');
}

export default function CustomRealeraServerKeywordPage() {
  return <StaticKeywordPage slug="custom-realera-server" />;
}

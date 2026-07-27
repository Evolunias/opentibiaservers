import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-realesta-server');
}

export default function CustomRealestaServerKeywordPage() {
  return <StaticKeywordPage slug="custom-realesta-server" />;
}

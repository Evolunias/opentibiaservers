import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-realesta-ot-server');
}

export default function CustomRealestaOtServerKeywordPage() {
  return <StaticKeywordPage slug="custom-realesta-ot-server" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-realesta-ot-server');
}

export default function TopRealestaOtServerKeywordPage() {
  return <StaticKeywordPage slug="top-realesta-ot-server" />;
}

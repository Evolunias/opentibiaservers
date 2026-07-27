import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-realesta-ot-server');
}

export default function CurrentRealestaOtServerKeywordPage() {
  return <StaticKeywordPage slug="current-realesta-ot-server" />;
}

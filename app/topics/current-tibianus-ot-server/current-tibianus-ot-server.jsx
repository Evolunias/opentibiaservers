import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibianus-ot-server');
}

export default function CurrentTibianusOtServerKeywordPage() {
  return <StaticKeywordPage slug="current-tibianus-ot-server" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibianus-ot-server');
}

export default function LowrateTibianusOtServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibianus-ot-server" />;
}

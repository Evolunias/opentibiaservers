import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibianus-ot-server');
}

export default function TopTibianusOtServerKeywordPage() {
  return <StaticKeywordPage slug="top-tibianus-ot-server" />;
}

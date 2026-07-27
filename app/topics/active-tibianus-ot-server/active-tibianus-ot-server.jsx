import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibianus-ot-server');
}

export default function ActiveTibianusOtServerKeywordPage() {
  return <StaticKeywordPage slug="active-tibianus-ot-server" />;
}

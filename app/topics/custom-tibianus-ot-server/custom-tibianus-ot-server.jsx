import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibianus-ot-server');
}

export default function CustomTibianusOtServerKeywordPage() {
  return <StaticKeywordPage slug="custom-tibianus-ot-server" />;
}

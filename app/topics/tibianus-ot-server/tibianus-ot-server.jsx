import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-ot-server');
}

export default function TibianusOtServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-ot-server" />;
}

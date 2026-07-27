import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ot-servers-usa');
}

export default function OtServersUsaKeywordPage() {
  return <StaticKeywordPage slug="ot-servers-usa" />;
}

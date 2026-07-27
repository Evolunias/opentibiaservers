import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ot-servers-canada');
}

export default function OtServersCanadaKeywordPage() {
  return <StaticKeywordPage slug="ot-servers-canada" />;
}

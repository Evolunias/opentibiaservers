import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ot-servers-north-america');
}

export default function OtServersNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="ot-servers-north-america" />;
}

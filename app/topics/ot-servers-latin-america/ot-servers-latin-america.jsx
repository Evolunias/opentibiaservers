import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ot-servers-latin-america');
}

export default function OtServersLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="ot-servers-latin-america" />;
}

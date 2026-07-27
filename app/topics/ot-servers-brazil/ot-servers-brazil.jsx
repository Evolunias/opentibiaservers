import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ot-servers-brazil');
}

export default function OtServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="ot-servers-brazil" />;
}

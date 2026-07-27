import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ot-servers-mexico');
}

export default function OtServersMexicoKeywordPage() {
  return <StaticKeywordPage slug="ot-servers-mexico" />;
}

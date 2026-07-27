import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-ot');
}

export default function ElderaOtKeywordPage() {
  return <StaticKeywordPage slug="eldera-ot" />;
}

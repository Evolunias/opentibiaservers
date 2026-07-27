import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-eldera-ot');
}

export default function CustomElderaOtKeywordPage() {
  return <StaticKeywordPage slug="custom-eldera-ot" />;
}

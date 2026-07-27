import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-eldera-ot');
}

export default function TopElderaOtKeywordPage() {
  return <StaticKeywordPage slug="top-eldera-ot" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-eldera-ot');
}

export default function FreshStartElderaOtKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-eldera-ot" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-eldera-ot');
}

export default function ActiveElderaOtKeywordPage() {
  return <StaticKeywordPage slug="active-eldera-ot" />;
}

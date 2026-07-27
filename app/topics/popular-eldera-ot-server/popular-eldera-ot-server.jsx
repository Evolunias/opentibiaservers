import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-eldera-ot-server');
}

export default function PopularElderaOtServerKeywordPage() {
  return <StaticKeywordPage slug="popular-eldera-ot-server" />;
}

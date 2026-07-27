import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-imperianic-ot-server');
}

export default function PopularImperianicOtServerKeywordPage() {
  return <StaticKeywordPage slug="popular-imperianic-ot-server" />;
}

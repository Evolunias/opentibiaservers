import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-blazera-ot-server');
}

export default function PopularBlazeraOtServerKeywordPage() {
  return <StaticKeywordPage slug="popular-blazera-ot-server" />;
}

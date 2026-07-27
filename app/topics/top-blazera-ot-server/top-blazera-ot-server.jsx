import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-blazera-ot-server');
}

export default function TopBlazeraOtServerKeywordPage() {
  return <StaticKeywordPage slug="top-blazera-ot-server" />;
}

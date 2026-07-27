import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-blazera-ot-server');
}

export default function CustomBlazeraOtServerKeywordPage() {
  return <StaticKeywordPage slug="custom-blazera-ot-server" />;
}

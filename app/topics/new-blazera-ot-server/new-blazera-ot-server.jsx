import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-blazera-ot-server');
}

export default function NewBlazeraOtServerKeywordPage() {
  return <StaticKeywordPage slug="new-blazera-ot-server" />;
}

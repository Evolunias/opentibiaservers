import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-realera-ot-server');
}

export default function NewRealeraOtServerKeywordPage() {
  return <StaticKeywordPage slug="new-realera-ot-server" />;
}

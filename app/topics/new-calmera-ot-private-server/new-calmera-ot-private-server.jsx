import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-calmera-ot-private-server');
}

export default function NewCalmeraOtPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="new-calmera-ot-private-server" />;
}

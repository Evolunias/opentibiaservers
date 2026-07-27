import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-calmera-ot-server');
}

export default function NewCalmeraOtServerKeywordPage() {
  return <StaticKeywordPage slug="new-calmera-ot-server" />;
}

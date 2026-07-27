import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-imperianic-ot-server');
}

export default function NewImperianicOtServerKeywordPage() {
  return <StaticKeywordPage slug="new-imperianic-ot-server" />;
}

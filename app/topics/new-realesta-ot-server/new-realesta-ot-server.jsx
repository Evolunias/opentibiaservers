import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-realesta-ot-server');
}

export default function NewRealestaOtServerKeywordPage() {
  return <StaticKeywordPage slug="new-realesta-ot-server" />;
}

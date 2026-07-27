import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-luminera-ot-server');
}

export default function NewLumineraOtServerKeywordPage() {
  return <StaticKeywordPage slug="new-luminera-ot-server" />;
}

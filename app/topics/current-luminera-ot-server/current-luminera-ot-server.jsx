import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-luminera-ot-server');
}

export default function CurrentLumineraOtServerKeywordPage() {
  return <StaticKeywordPage slug="current-luminera-ot-server" />;
}

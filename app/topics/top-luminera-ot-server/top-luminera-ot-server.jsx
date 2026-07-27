import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-luminera-ot-server');
}

export default function TopLumineraOtServerKeywordPage() {
  return <StaticKeywordPage slug="top-luminera-ot-server" />;
}

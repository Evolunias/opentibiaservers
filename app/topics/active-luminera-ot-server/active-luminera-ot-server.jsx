import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-luminera-ot-server');
}

export default function ActiveLumineraOtServerKeywordPage() {
  return <StaticKeywordPage slug="active-luminera-ot-server" />;
}

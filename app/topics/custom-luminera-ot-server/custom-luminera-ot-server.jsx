import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-luminera-ot-server');
}

export default function CustomLumineraOtServerKeywordPage() {
  return <StaticKeywordPage slug="custom-luminera-ot-server" />;
}

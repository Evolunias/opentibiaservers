import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-ot-server');
}

export default function LumineraOtServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-ot-server" />;
}

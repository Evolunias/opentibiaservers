import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-luminera-ot-server');
}

export default function PopularLumineraOtServerKeywordPage() {
  return <StaticKeywordPage slug="popular-luminera-ot-server" />;
}

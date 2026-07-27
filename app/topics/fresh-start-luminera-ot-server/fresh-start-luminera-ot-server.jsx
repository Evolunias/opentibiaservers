import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-luminera-ot-server');
}

export default function FreshStartLumineraOtServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-luminera-ot-server" />;
}

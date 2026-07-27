import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-luminera-ot-server');
}

export default function LowrateLumineraOtServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-luminera-ot-server" />;
}

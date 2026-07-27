import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-luminera-ot');
}

export default function LowrateLumineraOtKeywordPage() {
  return <StaticKeywordPage slug="lowrate-luminera-ot" />;
}

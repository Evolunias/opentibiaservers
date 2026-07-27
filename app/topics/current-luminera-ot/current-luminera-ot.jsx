import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-luminera-ot');
}

export default function CurrentLumineraOtKeywordPage() {
  return <StaticKeywordPage slug="current-luminera-ot" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-realesta-ot');
}

export default function CurrentRealestaOtKeywordPage() {
  return <StaticKeywordPage slug="current-realesta-ot" />;
}

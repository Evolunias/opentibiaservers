import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-realesta-ot');
}

export default function OfficialRealestaOtKeywordPage() {
  return <StaticKeywordPage slug="official-realesta-ot" />;
}

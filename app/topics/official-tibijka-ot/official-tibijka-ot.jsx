import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibijka-ot');
}

export default function OfficialTibijkaOtKeywordPage() {
  return <StaticKeywordPage slug="official-tibijka-ot" />;
}

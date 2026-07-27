import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-trailer');
}

export default function NoxiousotTrailerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-trailer" />;
}

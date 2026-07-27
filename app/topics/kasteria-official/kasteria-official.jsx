import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-official');
}

export default function KasteriaOfficialKeywordPage() {
  return <StaticKeywordPage slug="kasteria-official" />;
}

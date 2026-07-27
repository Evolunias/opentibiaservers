import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('titania-open-pvp');
}

export default function TitaniaOpenPvpKeywordPage() {
  return <StaticKeywordPage slug="titania-open-pvp" />;
}

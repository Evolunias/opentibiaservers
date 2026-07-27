import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otland-pvp');
}

export default function OtlandPvpKeywordPage() {
  return <StaticKeywordPage slug="otland-pvp" />;
}

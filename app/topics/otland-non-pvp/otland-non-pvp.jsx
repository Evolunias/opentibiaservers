import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otland-non-pvp');
}

export default function OtlandNonPvpKeywordPage() {
  return <StaticKeywordPage slug="otland-non-pvp" />;
}

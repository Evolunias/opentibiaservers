import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ocera-open-pvp');
}

export default function OceraOpenPvpKeywordPage() {
  return <StaticKeywordPage slug="ocera-open-pvp" />;
}

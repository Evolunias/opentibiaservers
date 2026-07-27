import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-pvp');
}

export default function BlazeraPvpKeywordPage() {
  return <StaticKeywordPage slug="blazera-pvp" />;
}

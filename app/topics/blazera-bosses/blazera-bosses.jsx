import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-bosses');
}

export default function BlazeraBossesKeywordPage() {
  return <StaticKeywordPage slug="blazera-bosses" />;
}

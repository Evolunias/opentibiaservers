import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-kasteria-ot');
}

export default function ActiveKasteriaOtKeywordPage() {
  return <StaticKeywordPage slug="active-kasteria-ot" />;
}

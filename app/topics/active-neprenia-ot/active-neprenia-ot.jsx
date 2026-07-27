import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-neprenia-ot');
}

export default function ActiveNepreniaOtKeywordPage() {
  return <StaticKeywordPage slug="active-neprenia-ot" />;
}

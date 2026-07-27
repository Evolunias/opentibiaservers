import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-neprenia-ot');
}

export default function CustomNepreniaOtKeywordPage() {
  return <StaticKeywordPage slug="custom-neprenia-ot" />;
}

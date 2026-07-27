import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-neprenia-ot');
}

export default function NewNepreniaOtKeywordPage() {
  return <StaticKeywordPage slug="new-neprenia-ot" />;
}

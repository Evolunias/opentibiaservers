import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-ot');
}

export default function NepreniaOtKeywordPage() {
  return <StaticKeywordPage slug="neprenia-ot" />;
}

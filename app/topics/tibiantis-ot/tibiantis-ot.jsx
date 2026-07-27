import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-ot');
}

export default function TibiantisOtKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-ot" />;
}

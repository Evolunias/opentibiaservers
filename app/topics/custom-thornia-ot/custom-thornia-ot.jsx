import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-thornia-ot');
}

export default function CustomThorniaOtKeywordPage() {
  return <StaticKeywordPage slug="custom-thornia-ot" />;
}

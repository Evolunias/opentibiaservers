import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-thornia-ot');
}

export default function ActiveThorniaOtKeywordPage() {
  return <StaticKeywordPage slug="active-thornia-ot" />;
}

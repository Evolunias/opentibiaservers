import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-imperianic-ot');
}

export default function CustomImperianicOtKeywordPage() {
  return <StaticKeywordPage slug="custom-imperianic-ot" />;
}

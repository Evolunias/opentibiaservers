import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-realesta-ot');
}

export default function CustomRealestaOtKeywordPage() {
  return <StaticKeywordPage slug="custom-realesta-ot" />;
}

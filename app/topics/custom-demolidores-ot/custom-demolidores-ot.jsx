import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-demolidores-ot');
}

export default function CustomDemolidoresOtKeywordPage() {
  return <StaticKeywordPage slug="custom-demolidores-ot" />;
}

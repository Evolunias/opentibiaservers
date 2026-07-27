import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-imperianic-ots');
}

export default function CustomImperianicOtsKeywordPage() {
  return <StaticKeywordPage slug="custom-imperianic-ots" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-classicus-ots');
}

export default function CustomClassicusOtsKeywordPage() {
  return <StaticKeywordPage slug="custom-classicus-ots" />;
}

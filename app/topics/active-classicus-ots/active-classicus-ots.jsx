import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-classicus-ots');
}

export default function ActiveClassicusOtsKeywordPage() {
  return <StaticKeywordPage slug="active-classicus-ots" />;
}

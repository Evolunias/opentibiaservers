import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-imperianic-ots');
}

export default function ActiveImperianicOtsKeywordPage() {
  return <StaticKeywordPage slug="active-imperianic-ots" />;
}

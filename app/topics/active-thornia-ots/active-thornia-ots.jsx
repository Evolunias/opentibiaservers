import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-thornia-ots');
}

export default function ActiveThorniaOtsKeywordPage() {
  return <StaticKeywordPage slug="active-thornia-ots" />;
}

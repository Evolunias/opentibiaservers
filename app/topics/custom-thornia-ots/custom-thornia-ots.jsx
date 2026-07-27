import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-thornia-ots');
}

export default function CustomThorniaOtsKeywordPage() {
  return <StaticKeywordPage slug="custom-thornia-ots" />;
}

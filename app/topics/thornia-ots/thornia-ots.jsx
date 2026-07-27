import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-ots');
}

export default function ThorniaOtsKeywordPage() {
  return <StaticKeywordPage slug="thornia-ots" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-demolidores-official');
}

export default function CurrentDemolidoresOfficialKeywordPage() {
  return <StaticKeywordPage slug="current-demolidores-official" />;
}

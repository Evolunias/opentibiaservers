import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-demolidores-official');
}

export default function FreshStartDemolidoresOfficialKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-demolidores-official" />;
}

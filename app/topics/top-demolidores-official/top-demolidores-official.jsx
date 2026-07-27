import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-demolidores-official');
}

export default function TopDemolidoresOfficialKeywordPage() {
  return <StaticKeywordPage slug="top-demolidores-official" />;
}

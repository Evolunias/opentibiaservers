import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-demolidores-official');
}

export default function PopularDemolidoresOfficialKeywordPage() {
  return <StaticKeywordPage slug="popular-demolidores-official" />;
}

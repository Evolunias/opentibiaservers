import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-demolidores-official');
}

export default function BestDemolidoresOfficialKeywordPage() {
  return <StaticKeywordPage slug="best-demolidores-official" />;
}

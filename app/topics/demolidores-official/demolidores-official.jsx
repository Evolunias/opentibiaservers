import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-official');
}

export default function DemolidoresOfficialKeywordPage() {
  return <StaticKeywordPage slug="demolidores-official" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-demolidores-official');
}

export default function CustomDemolidoresOfficialKeywordPage() {
  return <StaticKeywordPage slug="custom-demolidores-official" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-demolidores-official');
}

export default function ActiveDemolidoresOfficialKeywordPage() {
  return <StaticKeywordPage slug="active-demolidores-official" />;
}

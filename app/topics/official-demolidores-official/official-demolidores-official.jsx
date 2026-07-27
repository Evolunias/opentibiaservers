import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-demolidores-official');
}

export default function OfficialDemolidoresOfficialKeywordPage() {
  return <StaticKeywordPage slug="official-demolidores-official" />;
}

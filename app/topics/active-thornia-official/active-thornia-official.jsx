import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-thornia-official');
}

export default function ActiveThorniaOfficialKeywordPage() {
  return <StaticKeywordPage slug="active-thornia-official" />;
}

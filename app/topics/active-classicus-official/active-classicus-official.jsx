import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-classicus-official');
}

export default function ActiveClassicusOfficialKeywordPage() {
  return <StaticKeywordPage slug="active-classicus-official" />;
}

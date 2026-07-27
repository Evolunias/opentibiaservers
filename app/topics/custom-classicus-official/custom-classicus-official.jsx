import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-classicus-official');
}

export default function CustomClassicusOfficialKeywordPage() {
  return <StaticKeywordPage slug="custom-classicus-official" />;
}

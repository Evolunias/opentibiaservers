import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-imperianic-official');
}

export default function CustomImperianicOfficialKeywordPage() {
  return <StaticKeywordPage slug="custom-imperianic-official" />;
}

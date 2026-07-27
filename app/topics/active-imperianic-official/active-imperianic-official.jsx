import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-imperianic-official');
}

export default function ActiveImperianicOfficialKeywordPage() {
  return <StaticKeywordPage slug="active-imperianic-official" />;
}

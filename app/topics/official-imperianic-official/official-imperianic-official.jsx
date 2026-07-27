import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-imperianic-official');
}

export default function OfficialImperianicOfficialKeywordPage() {
  return <StaticKeywordPage slug="official-imperianic-official" />;
}

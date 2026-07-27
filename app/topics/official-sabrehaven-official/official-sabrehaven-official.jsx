import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-sabrehaven-official');
}

export default function OfficialSabrehavenOfficialKeywordPage() {
  return <StaticKeywordPage slug="official-sabrehaven-official" />;
}

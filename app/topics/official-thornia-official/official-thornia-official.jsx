import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-thornia-official');
}

export default function OfficialThorniaOfficialKeywordPage() {
  return <StaticKeywordPage slug="official-thornia-official" />;
}

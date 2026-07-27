import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-official');
}

export default function ThorniaOfficialKeywordPage() {
  return <StaticKeywordPage slug="thornia-official" />;
}

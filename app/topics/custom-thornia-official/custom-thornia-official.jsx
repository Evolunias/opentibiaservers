import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-thornia-official');
}

export default function CustomThorniaOfficialKeywordPage() {
  return <StaticKeywordPage slug="custom-thornia-official" />;
}

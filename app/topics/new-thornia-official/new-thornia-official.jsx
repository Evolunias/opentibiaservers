import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-thornia-official');
}

export default function NewThorniaOfficialKeywordPage() {
  return <StaticKeywordPage slug="new-thornia-official" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibiascape-official');
}

export default function NewTibiascapeOfficialKeywordPage() {
  return <StaticKeywordPage slug="new-tibiascape-official" />;
}

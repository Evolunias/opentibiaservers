import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibiascape-official');
}

export default function CustomTibiascapeOfficialKeywordPage() {
  return <StaticKeywordPage slug="custom-tibiascape-official" />;
}

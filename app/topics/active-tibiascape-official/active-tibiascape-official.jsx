import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibiascape-official');
}

export default function ActiveTibiascapeOfficialKeywordPage() {
  return <StaticKeywordPage slug="active-tibiascape-official" />;
}

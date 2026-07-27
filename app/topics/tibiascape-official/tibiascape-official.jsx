import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-official');
}

export default function TibiascapeOfficialKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-official" />;
}

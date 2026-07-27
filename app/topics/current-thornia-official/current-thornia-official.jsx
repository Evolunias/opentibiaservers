import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-thornia-official');
}

export default function CurrentThorniaOfficialKeywordPage() {
  return <StaticKeywordPage slug="current-thornia-official" />;
}

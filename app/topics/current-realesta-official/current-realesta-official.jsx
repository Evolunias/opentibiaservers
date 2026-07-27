import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-realesta-official');
}

export default function CurrentRealestaOfficialKeywordPage() {
  return <StaticKeywordPage slug="current-realesta-official" />;
}

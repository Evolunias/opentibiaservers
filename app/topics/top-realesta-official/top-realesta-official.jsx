import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-realesta-official');
}

export default function TopRealestaOfficialKeywordPage() {
  return <StaticKeywordPage slug="top-realesta-official" />;
}

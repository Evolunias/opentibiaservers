import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-official');
}

export default function RealestaOfficialKeywordPage() {
  return <StaticKeywordPage slug="realesta-official" />;
}

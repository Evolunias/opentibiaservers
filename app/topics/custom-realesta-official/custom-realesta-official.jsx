import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-realesta-official');
}

export default function CustomRealestaOfficialKeywordPage() {
  return <StaticKeywordPage slug="custom-realesta-official" />;
}

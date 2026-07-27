import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-imperianic-official');
}

export default function CurrentImperianicOfficialKeywordPage() {
  return <StaticKeywordPage slug="current-imperianic-official" />;
}

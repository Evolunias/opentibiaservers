import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-official');
}

export default function ImperianicOfficialKeywordPage() {
  return <StaticKeywordPage slug="imperianic-official" />;
}

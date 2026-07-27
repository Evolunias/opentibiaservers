import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-imperianic-official');
}

export default function NewImperianicOfficialKeywordPage() {
  return <StaticKeywordPage slug="new-imperianic-official" />;
}

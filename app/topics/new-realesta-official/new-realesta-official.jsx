import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-realesta-official');
}

export default function NewRealestaOfficialKeywordPage() {
  return <StaticKeywordPage slug="new-realesta-official" />;
}

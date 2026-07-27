import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-mist-of-death-official');
}

export default function NewMistOfDeathOfficialKeywordPage() {
  return <StaticKeywordPage slug="new-mist-of-death-official" />;
}

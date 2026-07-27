import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-mist-of-death-official');
}

export default function CustomMistOfDeathOfficialKeywordPage() {
  return <StaticKeywordPage slug="custom-mist-of-death-official" />;
}

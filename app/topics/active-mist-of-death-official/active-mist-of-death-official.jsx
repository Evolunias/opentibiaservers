import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-mist-of-death-official');
}

export default function ActiveMistOfDeathOfficialKeywordPage() {
  return <StaticKeywordPage slug="active-mist-of-death-official" />;
}

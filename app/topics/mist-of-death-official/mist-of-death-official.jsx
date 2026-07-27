import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-official');
}

export default function MistOfDeathOfficialKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-official" />;
}

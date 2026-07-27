import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-mist-of-death-ot');
}

export default function NewMistOfDeathOtKeywordPage() {
  return <StaticKeywordPage slug="new-mist-of-death-ot" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-mist-of-death-ot');
}

export default function LowrateMistOfDeathOtKeywordPage() {
  return <StaticKeywordPage slug="lowrate-mist-of-death-ot" />;
}

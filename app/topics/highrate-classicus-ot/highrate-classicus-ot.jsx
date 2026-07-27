import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-classicus-ot');
}

export default function HighrateClassicusOtKeywordPage() {
  return <StaticKeywordPage slug="highrate-classicus-ot" />;
}

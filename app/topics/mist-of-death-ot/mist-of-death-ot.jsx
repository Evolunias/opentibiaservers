import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-ot');
}

export default function MistOfDeathOtKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-ot" />;
}

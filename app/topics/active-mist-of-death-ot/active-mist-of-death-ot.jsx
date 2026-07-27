import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-mist-of-death-ot');
}

export default function ActiveMistOfDeathOtKeywordPage() {
  return <StaticKeywordPage slug="active-mist-of-death-ot" />;
}

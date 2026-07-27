import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-mist-of-death-ot-server');
}

export default function PopularMistOfDeathOtServerKeywordPage() {
  return <StaticKeywordPage slug="popular-mist-of-death-ot-server" />;
}

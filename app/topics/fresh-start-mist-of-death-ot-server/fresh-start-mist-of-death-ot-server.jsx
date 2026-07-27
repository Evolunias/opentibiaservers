import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-mist-of-death-ot-server');
}

export default function FreshStartMistOfDeathOtServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-mist-of-death-ot-server" />;
}

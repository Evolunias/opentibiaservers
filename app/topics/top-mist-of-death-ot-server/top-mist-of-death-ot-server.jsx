import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-mist-of-death-ot-server');
}

export default function TopMistOfDeathOtServerKeywordPage() {
  return <StaticKeywordPage slug="top-mist-of-death-ot-server" />;
}

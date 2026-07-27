import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-mist-of-death-ot-server');
}

export default function CustomMistOfDeathOtServerKeywordPage() {
  return <StaticKeywordPage slug="custom-mist-of-death-ot-server" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-ot-server');
}

export default function MistOfDeathOtServerKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-ot-server" />;
}

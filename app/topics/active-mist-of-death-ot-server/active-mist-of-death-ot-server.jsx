import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-mist-of-death-ot-server');
}

export default function ActiveMistOfDeathOtServerKeywordPage() {
  return <StaticKeywordPage slug="active-mist-of-death-ot-server" />;
}

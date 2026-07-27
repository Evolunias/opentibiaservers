import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-mist-of-death-server');
}

export default function ActiveMistOfDeathServerKeywordPage() {
  return <StaticKeywordPage slug="active-mist-of-death-server" />;
}

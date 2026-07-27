import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-mist-of-death-private-server');
}

export default function ActiveMistOfDeathPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="active-mist-of-death-private-server" />;
}

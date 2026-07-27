import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-mist-of-death-private-server');
}

export default function CustomMistOfDeathPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="custom-mist-of-death-private-server" />;
}

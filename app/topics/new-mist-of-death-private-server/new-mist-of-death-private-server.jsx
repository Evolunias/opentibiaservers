import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-mist-of-death-private-server');
}

export default function NewMistOfDeathPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="new-mist-of-death-private-server" />;
}

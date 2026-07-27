import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-mist-of-death-server');
}

export default function NewMistOfDeathServerKeywordPage() {
  return <StaticKeywordPage slug="new-mist-of-death-server" />;
}

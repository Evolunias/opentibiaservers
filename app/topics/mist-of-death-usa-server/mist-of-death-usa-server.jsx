import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-usa-server');
}

export default function MistOfDeathUsaServerKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-usa-server" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-fun-server');
}

export default function MistOfDeathFunServerKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-fun-server" />;
}

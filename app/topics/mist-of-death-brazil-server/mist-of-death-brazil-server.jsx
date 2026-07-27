import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-brazil-server');
}

export default function MistOfDeathBrazilServerKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-brazil-server" />;
}

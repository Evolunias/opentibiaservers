import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-france-server');
}

export default function MistOfDeathFranceServerKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-france-server" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-pvp-server-europe');
}

export default function MistOfDeathPvpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-pvp-server-europe" />;
}

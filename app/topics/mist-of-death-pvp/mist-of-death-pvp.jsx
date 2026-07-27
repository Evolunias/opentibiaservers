import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-pvp');
}

export default function MistOfDeathPvpKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-pvp" />;
}

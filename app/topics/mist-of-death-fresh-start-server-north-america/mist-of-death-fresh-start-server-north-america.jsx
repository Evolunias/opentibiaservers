import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-fresh-start-server-north-america');
}

export default function MistOfDeathFreshStartServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-fresh-start-server-north-america" />;
}

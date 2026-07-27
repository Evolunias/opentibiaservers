import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-retro-server-north-america');
}

export default function MistOfDeathRetroServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-retro-server-north-america" />;
}

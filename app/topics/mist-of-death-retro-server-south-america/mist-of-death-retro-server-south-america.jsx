import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-retro-server-south-america');
}

export default function MistOfDeathRetroServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-retro-server-south-america" />;
}

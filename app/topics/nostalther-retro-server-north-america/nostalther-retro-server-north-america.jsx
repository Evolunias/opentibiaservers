import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-retro-server-north-america');
}

export default function NostaltherRetroServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="nostalther-retro-server-north-america" />;
}

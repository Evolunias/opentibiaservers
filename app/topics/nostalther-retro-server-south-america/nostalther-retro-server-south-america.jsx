import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-retro-server-south-america');
}

export default function NostaltherRetroServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="nostalther-retro-server-south-america" />;
}

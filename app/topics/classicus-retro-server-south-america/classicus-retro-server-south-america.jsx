import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-retro-server-south-america');
}

export default function ClassicusRetroServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="classicus-retro-server-south-america" />;
}

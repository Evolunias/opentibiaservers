import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-pvp-server-argentina');
}

export default function NostaltherPvpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="nostalther-pvp-server-argentina" />;
}

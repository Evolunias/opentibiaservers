import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-fresh-start-server-argentina');
}

export default function NostaltherFreshStartServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="nostalther-fresh-start-server-argentina" />;
}

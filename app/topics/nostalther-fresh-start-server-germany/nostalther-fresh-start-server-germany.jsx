import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-fresh-start-server-germany');
}

export default function NostaltherFreshStartServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="nostalther-fresh-start-server-germany" />;
}

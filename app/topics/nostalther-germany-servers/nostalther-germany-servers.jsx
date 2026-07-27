import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-germany-servers');
}

export default function NostaltherGermanyServersKeywordPage() {
  return <StaticKeywordPage slug="nostalther-germany-servers" />;
}

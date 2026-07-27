import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-chile-servers');
}

export default function NostaltherChileServersKeywordPage() {
  return <StaticKeywordPage slug="nostalther-chile-servers" />;
}

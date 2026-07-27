import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-argentina-servers');
}

export default function NostaltherArgentinaServersKeywordPage() {
  return <StaticKeywordPage slug="nostalther-argentina-servers" />;
}

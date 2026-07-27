import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-sweden-servers');
}

export default function NostaltherSwedenServersKeywordPage() {
  return <StaticKeywordPage slug="nostalther-sweden-servers" />;
}

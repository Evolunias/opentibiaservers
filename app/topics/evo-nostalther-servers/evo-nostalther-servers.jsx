import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-nostalther-servers');
}

export default function EvoNostaltherServersKeywordPage() {
  return <StaticKeywordPage slug="evo-nostalther-servers" />;
}

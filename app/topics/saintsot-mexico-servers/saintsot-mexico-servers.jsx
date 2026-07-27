import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-mexico-servers');
}

export default function SaintsotMexicoServersKeywordPage() {
  return <StaticKeywordPage slug="saintsot-mexico-servers" />;
}

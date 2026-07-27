import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-mexico-server');
}

export default function SaintsotMexicoServerKeywordPage() {
  return <StaticKeywordPage slug="saintsot-mexico-server" />;
}

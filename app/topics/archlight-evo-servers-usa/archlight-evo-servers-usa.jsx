import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-evo-servers-usa');
}

export default function ArchlightEvoServersUsaKeywordPage() {
  return <StaticKeywordPage slug="archlight-evo-servers-usa" />;
}

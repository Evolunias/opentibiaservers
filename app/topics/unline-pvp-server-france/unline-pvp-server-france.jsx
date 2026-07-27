import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-pvp-server-france');
}

export default function UnlinePvpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="unline-pvp-server-france" />;
}

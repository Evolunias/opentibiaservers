import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-originaltibia-official');
}

export default function FreshStartOriginaltibiaOfficialKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-originaltibia-official" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-originaltibia-official');
}

export default function NewOriginaltibiaOfficialKeywordPage() {
  return <StaticKeywordPage slug="new-originaltibia-official" />;
}

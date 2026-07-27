import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-realera-official');
}

export default function ActiveRealeraOfficialKeywordPage() {
  return <StaticKeywordPage slug="active-realera-official" />;
}

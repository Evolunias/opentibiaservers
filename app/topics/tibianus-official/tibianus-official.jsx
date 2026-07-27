import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-official');
}

export default function TibianusOfficialKeywordPage() {
  return <StaticKeywordPage slug="tibianus-official" />;
}

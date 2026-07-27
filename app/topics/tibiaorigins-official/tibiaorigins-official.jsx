import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-official');
}

export default function TibiaoriginsOfficialKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-official" />;
}

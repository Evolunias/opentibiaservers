import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibiaorigins-official');
}

export default function CustomTibiaoriginsOfficialKeywordPage() {
  return <StaticKeywordPage slug="custom-tibiaorigins-official" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibiaorigins-server');
}

export default function CustomTibiaoriginsServerKeywordPage() {
  return <StaticKeywordPage slug="custom-tibiaorigins-server" />;
}

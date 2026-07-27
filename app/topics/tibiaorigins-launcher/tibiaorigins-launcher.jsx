import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-launcher');
}

export default function TibiaoriginsLauncherKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-launcher" />;
}

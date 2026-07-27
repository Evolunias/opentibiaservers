import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-launcher');
}

export default function MistOfDeathLauncherKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-launcher" />;
}

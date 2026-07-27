import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-screenshots');
}

export default function OxygenotScreenshotsKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-screenshots" />;
}

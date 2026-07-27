import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-screenshots');
}

export default function SabrehavenScreenshotsKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-screenshots" />;
}

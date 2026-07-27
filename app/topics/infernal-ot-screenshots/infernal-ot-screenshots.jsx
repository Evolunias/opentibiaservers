import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-screenshots');
}

export default function InfernalOtScreenshotsKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-screenshots" />;
}

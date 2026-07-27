import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ot-servers-screenshots');
}

export default function OtServersScreenshotsKeywordPage() {
  return <StaticKeywordPage slug="ot-servers-screenshots" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otclient-old-school');
}

export default function OtclientOldSchoolKeywordPage() {
  return <StaticKeywordPage slug="otclient-old-school" />;
}

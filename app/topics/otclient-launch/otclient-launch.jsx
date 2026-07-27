import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otclient-launch');
}

export default function OtclientLaunchKeywordPage() {
  return <StaticKeywordPage slug="otclient-launch" />;
}

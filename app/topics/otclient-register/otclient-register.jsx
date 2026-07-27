import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otclient-register');
}

export default function OtclientRegisterKeywordPage() {
  return <StaticKeywordPage slug="otclient-register" />;
}

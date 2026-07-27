import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-15-baiak-server');
}

export default function Neprenia15BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-15-baiak-server" />;
}

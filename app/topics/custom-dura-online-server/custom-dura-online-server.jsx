import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-dura-online-server');
}

export default function CustomDuraOnlineServerKeywordPage() {
  return <StaticKeywordPage slug="custom-dura-online-server" />;
}

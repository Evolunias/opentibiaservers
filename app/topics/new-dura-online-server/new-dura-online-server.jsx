import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-dura-online-server');
}

export default function NewDuraOnlineServerKeywordPage() {
  return <StaticKeywordPage slug="new-dura-online-server" />;
}

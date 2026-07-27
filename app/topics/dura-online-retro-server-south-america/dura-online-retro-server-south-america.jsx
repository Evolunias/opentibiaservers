import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-retro-server-south-america');
}

export default function DuraOnlineRetroServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="dura-online-retro-server-south-america" />;
}

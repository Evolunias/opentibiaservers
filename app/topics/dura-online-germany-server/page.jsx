import DuraOnlineGermanyServerKeywordPage, { generateMetadata } from './dura-online-germany-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DuraOnlineGermanyServerKeywordPage />;
}

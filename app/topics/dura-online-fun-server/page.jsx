import DuraOnlineFunServerKeywordPage, { generateMetadata } from './dura-online-fun-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DuraOnlineFunServerKeywordPage />;
}

import DuraOnlinePvpKeywordPage, { generateMetadata } from './dura-online-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DuraOnlinePvpKeywordPage />;
}

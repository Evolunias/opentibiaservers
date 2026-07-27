import DuraOnlinePvpeKeywordPage, { generateMetadata } from './dura-online-pvpe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DuraOnlinePvpeKeywordPage />;
}

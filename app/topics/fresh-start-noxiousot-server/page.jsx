import FreshStartNoxiousotServerKeywordPage, { generateMetadata } from './fresh-start-noxiousot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartNoxiousotServerKeywordPage />;
}

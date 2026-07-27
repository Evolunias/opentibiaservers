import NewNoxiousotServerKeywordPage, { generateMetadata } from './new-noxiousot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewNoxiousotServerKeywordPage />;
}

import NewNoxiousotClientKeywordPage, { generateMetadata } from './new-noxiousot-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewNoxiousotClientKeywordPage />;
}

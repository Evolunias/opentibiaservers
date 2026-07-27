import NewNoxiousotOtServerKeywordPage, { generateMetadata } from './new-noxiousot-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewNoxiousotOtServerKeywordPage />;
}

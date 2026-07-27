import NewNoxiousotLoginKeywordPage, { generateMetadata } from './new-noxiousot-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewNoxiousotLoginKeywordPage />;
}

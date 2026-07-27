import NewNoxiousotKeywordPage, { generateMetadata } from './new-noxiousot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewNoxiousotKeywordPage />;
}

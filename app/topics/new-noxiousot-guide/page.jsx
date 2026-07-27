import NewNoxiousotGuideKeywordPage, { generateMetadata } from './new-noxiousot-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewNoxiousotGuideKeywordPage />;
}

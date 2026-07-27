import PopularNoxiousotOfficialKeywordPage, { generateMetadata } from './popular-noxiousot-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularNoxiousotOfficialKeywordPage />;
}

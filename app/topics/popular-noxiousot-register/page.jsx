import PopularNoxiousotRegisterKeywordPage, { generateMetadata } from './popular-noxiousot-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularNoxiousotRegisterKeywordPage />;
}

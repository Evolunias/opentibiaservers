import PopularNoxiousotServerKeywordPage, { generateMetadata } from './popular-noxiousot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularNoxiousotServerKeywordPage />;
}

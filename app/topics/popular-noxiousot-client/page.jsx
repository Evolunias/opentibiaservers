import PopularNoxiousotClientKeywordPage, { generateMetadata } from './popular-noxiousot-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularNoxiousotClientKeywordPage />;
}

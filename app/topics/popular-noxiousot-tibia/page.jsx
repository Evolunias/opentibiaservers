import PopularNoxiousotTibiaKeywordPage, { generateMetadata } from './popular-noxiousot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularNoxiousotTibiaKeywordPage />;
}

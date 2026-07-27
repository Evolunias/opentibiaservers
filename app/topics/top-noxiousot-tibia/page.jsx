import TopNoxiousotTibiaKeywordPage, { generateMetadata } from './top-noxiousot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopNoxiousotTibiaKeywordPage />;
}

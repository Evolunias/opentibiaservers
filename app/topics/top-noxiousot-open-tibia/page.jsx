import TopNoxiousotOpenTibiaKeywordPage, { generateMetadata } from './top-noxiousot-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopNoxiousotOpenTibiaKeywordPage />;
}

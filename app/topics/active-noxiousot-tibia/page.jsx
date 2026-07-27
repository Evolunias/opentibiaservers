import ActiveNoxiousotTibiaKeywordPage, { generateMetadata } from './active-noxiousot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveNoxiousotTibiaKeywordPage />;
}

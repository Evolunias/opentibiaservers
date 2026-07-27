import ActiveNoxiousotOpenTibiaKeywordPage, { generateMetadata } from './active-noxiousot-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveNoxiousotOpenTibiaKeywordPage />;
}

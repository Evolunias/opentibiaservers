import CurrentNoxiousotOpenTibiaKeywordPage, { generateMetadata } from './current-noxiousot-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentNoxiousotOpenTibiaKeywordPage />;
}

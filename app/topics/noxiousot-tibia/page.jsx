import NoxiousotTibiaKeywordPage, { generateMetadata } from './noxiousot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoxiousotTibiaKeywordPage />;
}

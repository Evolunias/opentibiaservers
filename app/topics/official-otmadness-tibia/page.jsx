import OfficialOtmadnessTibiaKeywordPage, { generateMetadata } from './official-otmadness-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialOtmadnessTibiaKeywordPage />;
}

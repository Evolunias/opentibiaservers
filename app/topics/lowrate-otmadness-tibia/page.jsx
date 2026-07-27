import LowrateOtmadnessTibiaKeywordPage, { generateMetadata } from './lowrate-otmadness-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateOtmadnessTibiaKeywordPage />;
}

import TopOtmadnessTibiaKeywordPage, { generateMetadata } from './top-otmadness-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopOtmadnessTibiaKeywordPage />;
}

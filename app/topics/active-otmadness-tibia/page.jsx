import ActiveOtmadnessTibiaKeywordPage, { generateMetadata } from './active-otmadness-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveOtmadnessTibiaKeywordPage />;
}

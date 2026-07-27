import FreshStartOtmadnessTibiaKeywordPage, { generateMetadata } from './fresh-start-otmadness-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartOtmadnessTibiaKeywordPage />;
}

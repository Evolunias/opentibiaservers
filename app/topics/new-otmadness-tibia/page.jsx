import NewOtmadnessTibiaKeywordPage, { generateMetadata } from './new-otmadness-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewOtmadnessTibiaKeywordPage />;
}

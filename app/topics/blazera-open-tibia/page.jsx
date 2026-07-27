import BlazeraOpenTibiaKeywordPage, { generateMetadata } from './blazera-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BlazeraOpenTibiaKeywordPage />;
}

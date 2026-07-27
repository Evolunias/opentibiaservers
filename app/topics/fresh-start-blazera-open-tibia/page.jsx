import FreshStartBlazeraOpenTibiaKeywordPage, { generateMetadata } from './fresh-start-blazera-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartBlazeraOpenTibiaKeywordPage />;
}

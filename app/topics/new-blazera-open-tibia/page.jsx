import NewBlazeraOpenTibiaKeywordPage, { generateMetadata } from './new-blazera-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewBlazeraOpenTibiaKeywordPage />;
}

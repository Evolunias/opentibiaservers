import NewRealestaOpenTibiaKeywordPage, { generateMetadata } from './new-realesta-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewRealestaOpenTibiaKeywordPage />;
}

import NewCarlinotOpenTibiaKeywordPage, { generateMetadata } from './new-carlinot-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewCarlinotOpenTibiaKeywordPage />;
}

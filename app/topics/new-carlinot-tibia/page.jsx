import NewCarlinotTibiaKeywordPage, { generateMetadata } from './new-carlinot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewCarlinotTibiaKeywordPage />;
}

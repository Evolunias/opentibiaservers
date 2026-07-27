import NoResetCarlinotTibiaKeywordPage, { generateMetadata } from './no-reset-carlinot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetCarlinotTibiaKeywordPage />;
}

import NewMiracleOpenTibiaKeywordPage, { generateMetadata } from './new-miracle-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewMiracleOpenTibiaKeywordPage />;
}

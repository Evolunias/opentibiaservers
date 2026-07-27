import NewTibianusOpenTibiaKeywordPage, { generateMetadata } from './new-tibianus-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewTibianusOpenTibiaKeywordPage />;
}

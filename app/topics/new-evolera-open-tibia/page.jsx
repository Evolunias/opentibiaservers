import NewEvoleraOpenTibiaKeywordPage, { generateMetadata } from './new-evolera-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewEvoleraOpenTibiaKeywordPage />;
}

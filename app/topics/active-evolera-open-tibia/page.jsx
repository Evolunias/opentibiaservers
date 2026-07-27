import ActiveEvoleraOpenTibiaKeywordPage, { generateMetadata } from './active-evolera-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveEvoleraOpenTibiaKeywordPage />;
}

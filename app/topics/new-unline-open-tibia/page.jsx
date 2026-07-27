import NewUnlineOpenTibiaKeywordPage, { generateMetadata } from './new-unline-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewUnlineOpenTibiaKeywordPage />;
}

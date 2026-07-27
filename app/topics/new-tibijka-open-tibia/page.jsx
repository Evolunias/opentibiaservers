import NewTibijkaOpenTibiaKeywordPage, { generateMetadata } from './new-tibijka-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewTibijkaOpenTibiaKeywordPage />;
}

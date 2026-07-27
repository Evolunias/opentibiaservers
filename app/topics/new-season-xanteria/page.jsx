import NewSeasonXanteriaKeywordPage, { generateMetadata } from './new-season-xanteria';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonXanteriaKeywordPage />;
}

import NewXanteriaKeywordPage, { generateMetadata } from './new-xanteria';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewXanteriaKeywordPage />;
}

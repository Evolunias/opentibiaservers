import NewXanteriaOtsKeywordPage, { generateMetadata } from './new-xanteria-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewXanteriaOtsKeywordPage />;
}

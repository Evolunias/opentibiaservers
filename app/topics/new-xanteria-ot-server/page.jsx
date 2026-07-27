import NewXanteriaOtServerKeywordPage, { generateMetadata } from './new-xanteria-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewXanteriaOtServerKeywordPage />;
}

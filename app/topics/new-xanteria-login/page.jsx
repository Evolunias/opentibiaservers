import NewXanteriaLoginKeywordPage, { generateMetadata } from './new-xanteria-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewXanteriaLoginKeywordPage />;
}

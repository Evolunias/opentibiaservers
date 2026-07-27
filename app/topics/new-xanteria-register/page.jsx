import NewXanteriaRegisterKeywordPage, { generateMetadata } from './new-xanteria-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewXanteriaRegisterKeywordPage />;
}

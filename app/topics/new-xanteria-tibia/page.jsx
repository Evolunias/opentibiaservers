import NewXanteriaTibiaKeywordPage, { generateMetadata } from './new-xanteria-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewXanteriaTibiaKeywordPage />;
}

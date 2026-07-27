import NewAmeriaTibiaKeywordPage, { generateMetadata } from './new-ameria-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewAmeriaTibiaKeywordPage />;
}

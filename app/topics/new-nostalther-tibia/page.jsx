import NewNostaltherTibiaKeywordPage, { generateMetadata } from './new-nostalther-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewNostaltherTibiaKeywordPage />;
}

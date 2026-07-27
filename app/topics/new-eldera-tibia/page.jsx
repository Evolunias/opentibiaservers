import NewElderaTibiaKeywordPage, { generateMetadata } from './new-eldera-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewElderaTibiaKeywordPage />;
}

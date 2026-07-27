import NewMediviaTibiaKeywordPage, { generateMetadata } from './new-medivia-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewMediviaTibiaKeywordPage />;
}

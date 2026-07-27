import NewTibiascapeTibiaKeywordPage, { generateMetadata } from './new-tibiascape-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewTibiascapeTibiaKeywordPage />;
}

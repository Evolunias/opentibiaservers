import ActiveTibiascapeTibiaKeywordPage, { generateMetadata } from './active-tibiascape-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveTibiascapeTibiaKeywordPage />;
}

import NoResetTibiascapeTibiaKeywordPage, { generateMetadata } from './no-reset-tibiascape-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetTibiascapeTibiaKeywordPage />;
}

import NewTibiaretroCreateAccountKeywordPage, { generateMetadata } from './new-tibiaretro-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewTibiaretroCreateAccountKeywordPage />;
}

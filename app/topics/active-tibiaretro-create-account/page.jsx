import ActiveTibiaretroCreateAccountKeywordPage, { generateMetadata } from './active-tibiaretro-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveTibiaretroCreateAccountKeywordPage />;
}

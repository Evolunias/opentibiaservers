import CurrentTibiaretroCreateAccountKeywordPage, { generateMetadata } from './current-tibiaretro-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentTibiaretroCreateAccountKeywordPage />;
}

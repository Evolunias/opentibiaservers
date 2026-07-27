import EternalOdysseyCreateAccountKeywordPage, { generateMetadata } from './eternal-odyssey-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EternalOdysseyCreateAccountKeywordPage />;
}

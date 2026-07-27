import ActiveMadnessaliveKeywordPage, { generateMetadata } from './active-madnessalive';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveMadnessaliveKeywordPage />;
}
